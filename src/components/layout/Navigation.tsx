"use client";

import React, { useState } from "react";
import NavButton from "@/components/common/NavButton";
import { FaCode } from "react-icons/fa6";
import { ReactNode } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import SocialLinks from "@/components/common/SocialLinks";
import MobileNav from "@/components/layout/MobileNav";
import { TypewriterEffect } from "@/components/ui/type-writer-effect";

export default function Navigation(): ReactNode {
    const [mobile, setMobile] = useState<boolean>(false);

    function handleMobile(): void {
        setMobile((prev) => !prev);
    }

    return (
        <nav>
            <div
                className={`flex flex-col bg-spotify-light-dark max-md:mx-2 max-md:mt-2 mx-32 mt-4 p-2 rounded-full max-md:rounded-xl
         `}
            >
                <section className="flex flex-row w-full justify-between items-center max-md:px-4 max-md:py-1">
                    {/*Mobile Mode*/}
                    {mobile ? (
                        <FaTimes className="text-4xl sm:hidden" onClick={handleMobile} />
                    ) : (
                        <GiHamburgerMenu
                            className="text-4xl sm:hidden"
                            onClick={handleMobile}
                        />
                    )}

                    <a href="/" className="flex gap-2 text-3xl font-bold items-center">
                        <FaCode className="text-spotify-green w-[70px]" />
                        {/* <h1 className="max-lg:hidden">Toan Pham</h1> */}
                        <TypewriterEffect
                            words={[
                                { text: "Toan", className: "text-4xl" },
                                { text: "Pham", className: "text-4xl" },
                            ]}
                            className="place-self-center max-lg:hidden text-white"
                        />
                    </a>

                    {/*Hidden on Mobile*/}
                    <section className="flex flex-row gap-5 items-center max-sm:hidden">
                        <SocialLinks />
                        <PiLineVerticalThin className="text-spotify-gray text-4xl" />
                        <NavButton name="Resume" />
                    </section>
                </section>
                {mobile && <MobileNav handleMobile={handleMobile} />}
            </div>
        </nav>
    );
}