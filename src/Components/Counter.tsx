"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Counter = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    // Function to animate counting
    const animateCount = (setCount: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
        let start = 0;
        const increment = target / (duration * 60); // 60fps animation

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 1000 / 60);
    };

    useEffect(() => {
        if (isInView) {
            controls1.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } });
            controls2.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } });
            controls3.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } });
            controls4.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } });

            animateCount(setCount1, 100, 2);
            animateCount(setCount2, 300, 2.5);
            animateCount(setCount3, 90, 2);
            animateCount(setCount4, 95, 2);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="max-w-7xl w-full mx-auto p-5 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-10">
            <motion.div 
                className="w-full flex-col flex items-center justify-center gap-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls1}
            >
                <h2 className="text-4xl font-semibold">{count1}+</h2>
                <p className="text-gray-500">Happy Clients</p>
            </motion.div>

            <motion.div 
                className="w-full flex-col flex items-center justify-center gap-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls2}
            >
                <h2 className="text-4xl font-semibold">{count2}+</h2>
                <p className="text-gray-500">Solutions Proposed</p>
            </motion.div>

            <motion.div 
                className="w-full flex-col flex items-center justify-center gap-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls3}
            >
                <h2 className="text-4xl font-semibold">{count3}%</h2>
                <p className="text-gray-500">Clients Retention Rate</p>
            </motion.div>

            <motion.div 
                className="w-full flex-col flex items-center justify-center gap-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls4}
            >
                <h2 className="text-4xl font-semibold">{count4}%</h2>
                <p className="text-gray-500">Client Satisfaction Rate</p>
            </motion.div>
        </div>
    );
};

export default Counter;