import Navbar from "@/Components/Navbar";
import { ReactNode } from "react";

interface BodyWrapperProps {
    children: ReactNode;
}

const BodyWrapper = ({ children }: BodyWrapperProps) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default BodyWrapper;
