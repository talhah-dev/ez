"use client";
import Slider from 'react-infinite-logo-slider';

const Clients = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#919192] via-[#919192]/70 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#919192] via-[#919192]/70 to-transparent pointer-events-none z-10" />

                <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                    toRight={false}
                >
                    <Slider.Slide>
                        <img src="/client/benchmarkvending.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/client/cultivatingland.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/client/elitevendingkg.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/client/heartboxvend.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/client/llgamingsystems.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/client/nextgvending.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/client/sleddistribution.png" alt="client" className="w-36" />
                    </Slider.Slide>
                   
                </Slider>
            </div>
        </>
    );
};

export default Clients;
