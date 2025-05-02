"use client";
import Footer from "@/Components/Footer";
import Loader from "@/Components/Loader";
import { ReactNode, Suspense, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface BodyWrapperProps {
    children: ReactNode;
}

const BodyWrapper = ({ children }: BodyWrapperProps) => {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <>
            <Loader />
            <Suspense fallback={<div />}>
                <div className="bg-[#e5e5e6]">
                    {children}
                    <Footer />
                </div>
            </Suspense>
        </>
    );
};

export default BodyWrapper;
