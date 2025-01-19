import { useState, useEffect, useRef } from "react";

function Decypher({ text, interval = 70 }) {
    const [outputText, setOutputText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const chars =
        "アイウエオカキクコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギゲゴザジズゼゾダヂヅデドバビブベボパピ";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 1 }
        );

        let observerRefValue = null;

        if (ref.current) {
            observer.observe(ref.current);
            observerRefValue = ref.current;
        }

        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, []);

    useEffect(() => {
        let timer;
        if (isVisible && outputText.length < text.length) {
            timer = setInterval(() => {
                setOutputText((prev) => prev + text[prev.length]);
            }, interval);
        }

        return () => clearInterval(timer);
    }, [text, interval, outputText, isVisible]);

    const remainder =
        outputText.length < text.length
            ? text
                  .slice(outputText.length)
                  .split("")
                  .map(() => chars[Math.floor(Math.random() * chars.length)])
                  .join("")
            : "";

    return (
        <span ref={ref} className="font-sans">
            {outputText}
            {remainder}
        </span>
    );
}

export default Decypher;
