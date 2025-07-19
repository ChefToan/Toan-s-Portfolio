"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function ProfileCard() {
    return (
        <motion.div
            className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl p-4 max-md:p-3"
            id="#profile"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col gap-7 max-md:gap-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <BackgroundGradient containerClassName="rounded-[40px] place-self-center max-w-[350px]">
                        <Image
                            src="/toan-pfp.png"
                            alt="Profile Image"
                            width={350}
                            height={350}
                            objectFit="none"
                            className="rounded-[25px]"
                        />
                    </BackgroundGradient>
                </motion.div>

                <PersonalStatement />
                {/* <Location /> */}
                {/* <Booking /> */}
            </div>
        </motion.div>
    );
}

function Location() {
    return (
        <div className="text-lg px-4">
            <div className="flex items-center gap-2 font-medium">
                <IoLocationOutline className="text-spotify-green text-2xl" />
                Your City, State
            </div>
        </div>
    );
}

function Booking() {
    const email = ""; // Replace with the email you want to copy
    const phoneNum = "";

    const handleCopyEmail = () => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                alert("Email copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    const handleCopyNumber = () => {
        navigator.clipboard
            .writeText(phoneNum)
            .then(() => {
                alert("Phone number copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <div className="flex px-4 gap-3">
            <button
                type="button"
                className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
                onClick={handleCopyNumber}
            >
                <FaRegCopy /> Copy Number
            </button>
            <button
                type="button"
                className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
                onClick={handleCopyEmail}
            >
                <FaRegCopy /> Copy Email
            </button>
        </div>
    );
}

function PersonalStatement() {
    return (
        <motion.div 
            className="flex flex-col gap-3 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
            <motion.div 
                className="space-y-1.5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
                <h1 className="text-2xl font-semibold">Toan Pham</h1>
                <p className="text-spotify-gray text-md">
                    Engineer • Designer • Innovator
                </p>
            </motion.div>
            <motion.h4 
                className="text-sm font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
                I&apos;m a{" "}
                <span className="text-spotify-green">Computer Science senior</span> at Arizona State University,
                specializing in{" "}
                <span className="text-spotify-green">full-stack development</span> and{" "}
                <span className="text-spotify-green">AI/ML</span>. <br />
                <br />
                <span>
          I&apos;m passionate about building{" "}
                    <span className="text-spotify-green">intelligent applications</span> that leverage
          cutting-edge technologies to solve complex problems and create meaningful impact.
        </span>
                <br />
                <br />
                <span>
          From developing scalable web applications to implementing{" "}
                    <span className="text-spotify-green">machine learning models</span>, I thrive on
          creating solutions that bridge the gap between innovative technology and{" "}
                    <span className="text-spotify-green">real-world applications</span>.
        </span>
            </motion.h4>
        </motion.div>
    );
}