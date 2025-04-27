"use client";
import Slider from 'react-infinite-logo-slider';

const Clients = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none z-10" />

                <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                    toRight={false}
                >
                    <Slider.Slide>
                        <img src="/slider/any.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any2.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                   
                </Slider>
            </div>
            <div className="relative overflow-hidden mt-10">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none z-10" />
                <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={true}
                    blurBorderColor={'#fff'}
                    toRight={true}
                >
                    <Slider.Slide>
                        <img src="/slider/any.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any2.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src="/slider/any3.png" alt="client" className="w-36" />
                    </Slider.Slide>
                </Slider>
            </div>
        </>
    );
};

export default Clients;
