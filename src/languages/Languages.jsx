import { motion } from "motion/react";
import { languagesData } from "./languagesData";

function Languages() {
    const renderSeparators = () => {
        const separators = [];
        for (let i = 5; i < 100; i += 5) {
            separators.push(i);
        }
        return separators.map(separator => (
            <div
                key={separator}
                className="absolute top-0 bottom-0 left-0 border-r-2 border-white"
                style={{ left: `${separator}%` }}
            />
        ));
    };

    return (
        <motion.div
            className="mt-8 w-full"
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
        >
            {languagesData.map(language => (
                <div key={language.name}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl">{language.name}</h2>
                            <p className="opacity-50">{language.level}</p>
                        </div>

                        <div>{language.proficiency}%</div>
                    </div>

                    <div className="w-full bg-gray-300 rounded-r-xl h-4 relative mb-8">
                        {renderSeparators()}

                        <div
                            className="bg-quaternary h-4 rounded-r-xl"
                            style={{ width: `${language.proficiency}%` }}
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default Languages;
