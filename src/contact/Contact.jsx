import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Decypher from "../decypher/Decypher";
import ReactiveButton from "reactive-button";
import TextareaAutosize from "react-textarea-autosize";
import { motion } from "motion/react";
import Footer from "../Footer/Footer";

function FloatingLabelInput({ label, ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
                damping: 10,
                duration: 1,
                type: "spring",
                bounce: 1,
            }}
            viewport={{ amount: 0.2 }}
            className="relative pt-4"
        >
            {props.type !== "message" ? (
                <input
                    {...props}
                    placeholder={label}
                    required
                    className="peer w-full border-b-2 bg-primary placeholder-transparent focus:outline-none focus:border-quaternary"
                />
            ) : (
                <TextareaAutosize
                    {...props}
                    required
                    placeholder=" "
                    minRows={1}
                    maxRows={15}
                    className="peer w-full border-b-2 resize-none mb-16 bg-primary placeholder-transparent focus:outline-none focus:border-quaternary"
                />
            )}

            <label
                htmlFor={props.id}
                className="absolute left-0.5 -top-3 text-quaternary transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-secondary peer-placeholder-shown:top-3.5 peer-focus:-top-3 peer-focus:text-quaternary peer-focus:text-lg"
            >
                {label}
            </label>
        </motion.div>
    );
}

function Contact() {
    const form = useRef();
    const [state, setState] = useState("idle");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_3qv7ze9", "template_ykd2qtl", form.current, {
                publicKey: "KFJmFNtcERTU68BQg",
            })
            .then(
                () => {
                    setState("loading");
                    setTimeout(() => {
                        setState("success");
                    }, 3500);
                },
                (error) => {
                    setState("error");
                    console.log(error);
                    setTimeout(() => {
                        setState("idle");
                    }, 3500);
                }
            );
    };

    return (
        <div
            name="contact"
            className="w-full h-auto min-h-dvh flex flex-col justify-between items-center p-4"
        >
            <div className="flex flex-col justify-center items-center w-full flex-grow">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        damping: 8,
                        duration: 1,
                        type: "spring",
                        bounce: 1,
                    }}
                    viewport={{ amount: 0.2 }}
                    className="text-4xl font-bold inline border-b-4 border-tertiary"
                >
                    <Decypher text="Contact" />
                </motion.h2>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full max-w-md p-8 rounded-lg space-y-16 mb-8"
                >
                    <FloatingLabelInput
                        id="name"
                        type="text"
                        label="Name"
                        state={null}
                    />
                    <FloatingLabelInput
                        id="email"
                        type="email"
                        label="Email"
                        state={null}
                    />
                    <FloatingLabelInput
                        id="message"
                        type="message"
                        label="Message"
                        state={state}
                    />
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
                        <ReactiveButton
                            size="large"
                            messageDuration={4000}
                            buttonState={state}
                            loadingText="Sending"
                            successText="Success"
                            idleText="Send message"
                            type={"submit"}
                            shadow={true}
                            rounded={true}
                        />
                    </motion.span>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
