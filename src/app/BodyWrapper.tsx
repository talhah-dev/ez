import Footer from "@/Components/Footer";
import { ReactNode } from "react";

interface BodyWrapperProps {
    children: ReactNode
}

const BodyWrapper = ({ children }: BodyWrapperProps) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default BodyWrapper;
