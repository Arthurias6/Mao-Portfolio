import { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="w-full items-center text-lg">
            <div className="mx-auto px-4 py-4">
                <div className="mx-auto mt-2 max-w-md text-center leading-relaxed opacity-70">
                    <h1>MADE WITH ❤️</h1>
                    <p>Copyright © {year} Mao Lin. All Rights Reserved.</p>
                </div>

                <ul className="mt-4 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="https://www.instagram.com/maolin6"
                            target="_blank"
                            className="text-secondary opacity-70 transition hover:opacity-30"
                        >
                            <FaInstagram size={40} />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/Arthurias6"
                            target="_blank"
                            className="text-secondary opacity-70 transition hover:opacity-30"
                        >
                            <FaGithub size={40} />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/mao-lin-193064221/"
                            target="_blank"
                            className="text-secondary opacity-70 transition hover:opacity-30"
                        >
                            <FaLinkedin size={40} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
