import BodyWrapper from '@/app/BodyWrapper';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Home = () => {
    return (
        <BodyWrapper>
            <div className='bg-[url(/home_bg.svg)] h-screen bg-no-repeat w-full bg-cover'>
                <Navbar />
                home
            </div>
        </BodyWrapper>
    );
};

export default Home;
