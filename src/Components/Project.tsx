import Image from 'next/image';
import React from 'react'

interface ProjectProps {
    showImages?: number;
}

const Project: React.FC<ProjectProps> = ({ showImages = 19 }) => {
    return (
        <>
            {Array.from({ length: showImages }).map((_, index) => (
                <div key={index} className="w-full md:h-[18.5rem] rounded-2xl overflow-hidden">
                    <Image src={`/projects/${index + 1}.jpg`} width={1000} height={1000} className='w-full transition-all duration-500 hover:scale-105 rounded-2xl' alt='project' />
                </div>
            ))}
        </>
    );
};


export default Project