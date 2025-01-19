import { useState, useEffect } from "react";
import { useGlitch } from "react-powerglitch";
import { Link } from "react-scroll";
import { Divide as Hamburger } from "hamburger-react";
import { navbarData } from "./navbarData";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const handleClick = () => setOpen(!isOpen);

    const glitch = useGlitch({
        timing: {
            easing: "ease-out",
        },
        playMode: "hover",
    });

    const checkMobile = !isOpen
        ? "hidden"
        : "text-4xl absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-primary";

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 100);
        };

        handleScroll();

        const interval = setInterval(handleScroll, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <nav
            className={`fixed w-full px-4 flex justify-end items-center text-xl z-10 transition-all ease-in-out ${
                scrolling ? "bg-primary" : "bg-transparent"
            }`}
        >
            {/* Full-screeen menu */}
            <ul className="hidden md:flex justify-evenly text-2xl m-4">
                {navbarData.map((link) => (
                    <li key={link.link}>
                        <Link
                            to={link.link}
                            smooth={true}
                            duration={500}
                            spy={true}
                        >
                            <button
                                className="p-1 m-1 hover:border-y-2 hover:border-tertiary hover:text-secondary"
                                ref={glitch.ref}
                            >
                                {link.description}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div className="md:hidden z-10">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {/* Mobile menu */}
            <ul className={checkMobile}>
                {navbarData.map((link) => (
                    <li key={link.link} className="py-4">
                        <Link
                            onClick={handleClick}
                            to={link.link}
                            smooth={true}
                            duration={500}
                            spy={true}
                        >
                            <button
                                className="p-1 hover:border-y-2 hover:border-tertiary hover:text-secondary"
                                ref={glitch.ref}
                            >
                                {link.description}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
