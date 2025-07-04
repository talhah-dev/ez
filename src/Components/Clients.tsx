"use client";

import Image from "next/image";

const logo = [
    {
        image:"/client/benchmarkvending.png",
        alt: "Benchmark Vending",
    },
    {
        image:"/client/cultivatingland.png",
        alt: "cultivatingland",
    },
    {
        image:"/client/elitevendingkg.png",
        alt: "elitevendingkg",
    },
    {
        image:"/client/heartboxvend.png",
        alt: "heartboxvend",
    },
    {
        image:"/client/llgamingsystems.png",
        alt: "llgamingsystems",
    },
    {
        image:"/client/nextgvending.png",
        alt: "nextgvending",
    },
    {
        image:"/client/sleddistribution.png",
        alt: "sleddistribution",
    },
    {
        image:"/client/logo (1).jpg",
        alt: "logo",
    },
    {
        image:"/client/logo (1).png",
        alt: "logo",
    },
    {
        image:"/client/logo (2).png",
        alt: "logo",
    },
    {
        image:"/client/logo (2).jpg",
        alt: "logo",
    },
    {
        image:"/client/logo (3).png",
        alt: "logo",
    },
    {
        image:"/client/logo (3).jpg",
        alt: "logo",
    },
    {
        image:"/client/logo (4).jpg",
        alt: "logo",
    },
    {
        image:"/client/logo (5).jpg",
        alt: "logo",
    },
    {
        image:"/client/logo (6).jpg",
        alt: "logo",
    },
]

const Clients = () => {
    return (
        <>
            <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 w-full gap- 12 h-full max-w-7xl mx-auto items-center">
                {logo.map((item, index) => (
                    <div key={index} className="w-full h-40 border border-zinc-600 flex items-center justify-center p-5">
                        <Image width={100} height={100} src={item.image} className="h-auto w-full" alt={item.alt} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Clients;
