"use client"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"
import MenuBar from "./MenuBar"
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'

export default function RichTextEditor({
    content,
    onChange,
}: {
    content: string
    onChange: (html: string) => void
}) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
                bulletList:{
                    HTMLAttributes:{
                        class:"list-disc ml-4"
                    }
                },
                orderedList:{
                    HTMLAttributes:{
                        class:"list-decimal ml-4"
                    }
                }
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'], // enable for these node types
            }),
            Highlight
        ],

        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: "min-h-80 w-full border mt-4 p-4 border-zinc-300 rounded-lg bg-zinc-100",
            }
        }
    })

    useEffect(() => {
        if (editor && content) {
            editor.commands.setContent(content)
        }
    }, [editor])

    return (
        <div className="">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}
