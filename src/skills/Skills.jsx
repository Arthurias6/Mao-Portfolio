import Decypher from "../decypher/Decypher";
import Languages from "../languages/Languages";
import { skillsData } from "./skillsData";
import { useGlitch } from "react-powerglitch";

import {
    FaPython,
    FaJava,
    FaHtml5,
    FaReact,
    FaCss3,
    FaGitAlt,
    FaJenkins,
    FaDocker,
} from "react-icons/fa6";
import {
    SiTailwindcss,
    SiJavascript,
    SiRobotframework,
    SiSelenium,
    SiFlask,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { motion } from "motion/react";

const logosData = [
    { key: "python", level: "5/5", icon: <FaPython size={100} /> },
    { key: "java", level: "4/5", icon: <FaJava size={100} /> },
    { key: "html", level: "5/5", icon: <FaHtml5 size={100} /> },
    { key: "js", level: "5/5", icon: <SiJavascript size={100} /> },
    { key: "react", level: "4/5", icon: <FaReact size={100} /> },
    { key: "css", level: "4/5", icon: <FaCss3 size={100} /> },
    { key: "tailwind", level: "3/5", icon: <SiTailwindcss size={100} /> },
    { key: "git", level: "5/5", icon: <FaGitAlt size={100} /> },
    { key: "jenkins", level: "5/5", icon: <FaJenkins size={100} /> },
    { key: "docker", level: "2/5", icon: <FaDocker size={100} /> },
    { key: "rf", level: "5/5", icon: <SiRobotframework size={100} /> },
    { key: "sel", level: "4/5", icon: <SiSelenium size={100} /> },
    { key: "flask", level: "3/5", icon: <SiFlask size={100} /> },
    { key: "django", level: "4/5", icon: <DiDjango size={100} /> },
];

function Skills() {
    const glitch = useGlitch({
        timing: {
            duration: 5000,
        },
    });
    return (
        <div
            name="skills"
            className="w-full h-auto min-h-dvh flex flex-col md:flex-row flex-wrap justify-evenly p-16 md:p-4"
        >
            {/* Top section */}
            <div className="w-full flex justify-center mb-16 md:my-16">
                <div className="justify-center flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            damping: 8,
                            duration: 1,
                            type: "spring",
                            bounce: 1,
                        }}
                        viewport={{ amount: 0.2 }}
                        className="text-4xl font-bold border-b-4 border-t-4 border-tertiary mb-16"
                    >
                        <Decypher text="Tools" />
                    </motion.h2>

                    <motion.div
                        ref={glitch.ref}
                        className="relative m-auto overflow-hidden w-full md:w-[1500px]"
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
                        <div className="animate-infinite-slider flex w-[calc(500px*14)]">
                            {logosData.map((logo) => (
                                <div
                                    className="flex flex-col items-center justify-center w-[250px]"
                                    key={`logo1-${logo.key}`}
                                >
                                    <div>{logo.icon}</div>
                                    <p className="text-2xl">{logo.level}</p>
                                </div>
                            ))}

                            {logosData.map((logo) => (
                                <div
                                    className="flex flex-col items-center justify-center w-[250px]"
                                    key={`logo2-${logo.key}`}
                                >
                                    <div>{logo.icon}</div>
                                    <p className="text-2xl">{logo.level}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-50% from-transparent to-51% to-primary bg-[length:100%_4px] animate-scanlines" />
                    </motion.div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start flex-grow md:mb-8">
                {/* Soft skills */}
                <div className="flex-1 flex justify-center items-center mb-8 md:mb-4">
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                damping: 8,
                                duration: 1,
                                type: "spring",
                                bounce: 1,
                            }}
                            viewport={{ amount: 0.2 }}
                            className="text-4xl font-bold border-b-4 border-t-4 border-tertiary"
                        >
                            <Decypher text="Soft skills" />
                        </motion.h2>

                        <motion.ul
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
                            className="list-disc list-inside mt-8"
                        >
                            {skillsData.map((skill) => (
                                <li key={skill.id} className="mb-2">
                                    {skill.skill}{" "}
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                </div>

                {/* Languages */}
                <div className="flex-1 flex justify-start items-center mb-8 md:mb-0">
                    <div className="justify-start items-center w-full md:w-[75%]">
                        <motion.h2
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
                            className="relative text-4xl font-bold border-b-4 border-t-4 border-tertiary"
                        >
                            <Decypher text="Languages" />
                        </motion.h2>
                        <Languages />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
