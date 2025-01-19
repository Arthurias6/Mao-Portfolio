import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ReactiveButton from "reactive-button";
import Decypher from "../decypher/Decypher";

function About() {
    const aboutRef = useRef(null);
    const isImgVisible = useInView(aboutRef, { amount: 0.2 });

    return (
        <div
            name="about"
            ref={aboutRef}
            className="w-full h-auto min-h-dvh flex md:flex-row flex-col items-center justify-evenly p-16 md:p-4"
        >
            {/* Picture of me */}
            <div className="w-full md:w-1/3 mb-8 md:my-16">
                <motion.img
                    initial={{ opacity: 0, x: "-100vw" }}
                    animate={{
                        x: isImgVisible ? 0 : "-100vw",
                        opacity: isImgVisible ? 1 : 0,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    src="me.jpeg"
                    alt="Me image"
                    className="max-h-full max-w-full rounded-3xl object-scale-down shadow-photoShadow1 hover:shadow-photoShadow2 transition-shadow duration-500 ease-in-out"
                />
            </div>

            {/* Introduction */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-justify">
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        damping: 10,
                        duration: 1,
                        type: "spring",
                        bounce: 1,
                    }}
                    viewport={{ amount: 0.2 }}
                    className="text-4xl font-bold border-b-4 border-t-4 border-tertiary mb-8 py-2"
                >
                    <Decypher text="About Me" />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.2,
                        damping: 8,
                        duration: 1,
                        type: "spring",
                        bounce: 1,
                    }}
                    viewport={{ amount: 0.2 }}
                    className="mb-8"
                >
                    Hello, I&apos;m Mao! Currently located in Spain and I&apos;m
                    a QA Test Engineer passionate about web and API development.
                    I specialize in automated testing using tools such as Robot
                    Framework or Selenium but also trying to build interactive
                    and creative applications using the latest web technologies
                    like Python, ReactJS and TailwindCSS.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.2,
                        damping: 8,
                        duration: 1,
                        type: "spring",
                        bounce: 1,
                    }}
                    viewport={{ amount: 0.2 }}
                    className="mb-8"
                >
                    When I&apos;m not coding, I enjoy reading fantasy or sci-fi
                    books, playing videogames, watching series, playing
                    basketball or working on personal projects to expand my
                    skills. I believe in continuous learning and I try to stay
                    up to date with the ever-evolving world.
                </motion.p>
                <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        damping: 8,
                        duration: 1,
                        type: "spring",
                        bounce: 1,
                    }}
                    viewport={{ amount: 0.2 }}
                >
                    <a href="Mao Lin - CV.pdf" download="Mao Lin - CV">
                        <ReactiveButton
                            rounded={true}
                            size="large"
                            animation={true}
                            shadow={true}
                            idleText="My CV"
                        />
                    </a>
                </motion.span>
            </div>
        </div>
    );
}

export default About;
