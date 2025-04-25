import { ReactNode } from "react";

interface BodyWrapperProps {
    children: ReactNode
}

const BodyWrapper = ({ children }: BodyWrapperProps) => {
    return (
        <>
            {children}
        </>
    );
};

export default BodyWrapper;
