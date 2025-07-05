"use client";

import Image from "next/image";

const Clients = () => {
    return (
        <>
            <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 w-full h-full max-w-7xl mx-auto items-center">
                {Array.from({ length: 29 }).map((_, index) => (
                    <div key={index} className="w-full h-40 flex items-center justify-center md:p-5 p-2">
                        <Image width={100} height={100} src={`/client/${index+1}.png`} className="h-auto w-full" alt="logo" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Clients;
