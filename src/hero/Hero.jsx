import { useRef } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "motion/react";
import Decypher from "../decypher/Decypher";

function Hero() {
    const homeRef = useRef(null);
    const isVisible = useInView(homeRef, { amount: 0.9 });

    return (
        <div
            name="home"
            ref={homeRef}
            className="w-full h-auto min-h-dvh flex flex-col justify-center items-center md:justify-evenly"
        >
            <div className="relative w-full h-screen">
                <img
                    src="home.png"
                    alt="Home Image"
                    className="w-full h-screen object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-50% from-transparent to-51% to-gray-900 bg-[length:100%_4px] animate-scanlines" />

                <div className="absolute inset-0 flex items-center justify-center text-center text-primary">
                    <div>
                        <h1 className="text-4xl md:text-8xl font-bold">
                            <Decypher text="MAO LIN" />
                        </h1>
                        <p className="mt-4 text-4xl">
                            <span className="text-secondary">
                            <Typewriter
                                cursorBlinking={true}
                                cursorStyle="_"
                                cursor={true}
                                loop={false}
                                words={[
                                    "QA Tester",
                                    "Software Developer",
                                    "Tech Enthusiast",
                                    "Geek",
                                ]}
                            />
                            </span>
                        </p>
                    </div>
                </div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className="text-secondary"
                >
                    <FaCircleArrowDown
                        size={40}
                        className="relative left-1/2 animate-bounce bottom-10"
                    />
                </motion.span>
            </div>
        </div>
    );
}

export default Hero;
