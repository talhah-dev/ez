import React from 'react'
import { Editor } from "@tiptap/react"


const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) return null

    const buttonClass = (isActive: boolean) =>
        `py-1 px-3 rounded border border-zinc-300 hover:bg-gray-100 transition-all duration-500 ${isActive ? 'bg-black text-white' : 'text-gray-700'
        }`

    return (
        <div className="control-group">
            <div className="flex items-center gap-2 flex-wrap">
                <button type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={buttonClass(editor.isActive('heading', { level: 1 }))}
                >
                    H1
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={buttonClass(editor.isActive('heading', { level: 2 }))}
                >
                    H2
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={buttonClass(editor.isActive('heading', { level: 3 }))}
                >
                    H3
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={buttonClass(editor.isActive('paragraph'))}
                >
                    P
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={buttonClass(editor.isActive('bold'))}
                >
                    Bold
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={buttonClass(editor.isActive('italic'))}
                >
                    Italic
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={buttonClass(editor.isActive('bulletList'))}
                >
                    Bullet list
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={buttonClass(editor.isActive('orderedList'))}
                >
                    Ordered list
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={buttonClass(editor.isActive('strike'))}
                >
                    Strike
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={buttonClass(editor.isActive('code'))}
                >
                    Code
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className={buttonClass(false)}
                >
                    Horizontal rule
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    className={buttonClass(false)}
                >
                    break
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    className={buttonClass(false)}
                >
                    Clear marks
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().clearNodes().run()}
                    className={buttonClass(false)}
                >
                    Clear nodes
                </button>
            </div >
        </div >
    )
}

export default MenuBar
