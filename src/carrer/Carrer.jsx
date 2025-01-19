import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "motion/react";
import Decypher from "../decypher/Decypher";
import { carrerData } from "./carrerData";

function CustomTimelineElement({ experience }) {
    return (
        <VerticalTimelineElement
            contentArrowStyle={{ visibility: "hidden" }}
            contentStyle={{
                background: "#00060e",
                color: "#b7c1de",
                boxShadow: "none",
                border: "dotted",
                borderRadius: "50px",
                borderColor: "rgba(88, 103, 221, 1)",
            }}
            intersectionObserverProps={{ triggerOnce: false }}
            date={experience.date}
            iconStyle={{
                background: "rgb(255, 255, 255)",
                borderRadius: "5px",
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        className="object-cover max-w-full max-h-full"
                    />
                </div>
            }
        >
            <div className="text-justify">
                <h3 className="text-tertiary font-bold">{experience.title}</h3>
                <h4 className="text-xl">{experience.place}</h4>

                <ul className="list-inside list-disc">
                    <h4 className="mt-8 mb-4">{experience.description}</h4>
                    {experience.points.map((point, index) => (
                        <li className="mb-2" key={`experience-point-${index}`}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-50% from-transparent to-51% to-primary bg-[length:100%_4px] animate-scanlines" />
        </VerticalTimelineElement>
    );
}

function Carrer() {
    return (
        <div
            name="carrer"
            className="w-full h-auto min-h-dvh flex flex-col justify-center items-center md:justify-center font-serif text-2xl"
        >
            <div className="mt-16 mb-2">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.2,
                            damping: 10,
                            duration: 1,
                            type: "spring",
                            bounce: 1,
                        },
                    }}
                    viewport={{ amount: 1 }}
                    className="text-4xl font-bold border-b-4 border-t-4 border-tertiary"
                >
                    <Decypher text="Carrer" />
                </motion.h2>
            </div>

            <div className="my-16 justify-center">
                <VerticalTimeline
                    animate={true}
                    lineColor="linear-gradient(to bottom, rgba(88,103,221,1) 0%, rgba(255,42,109,1) 100%)"
                >
                    {carrerData.map((experience, index) => (
                        <CustomTimelineElement
                            experience={experience}
                            key={`experience-${index}`}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Carrer;
