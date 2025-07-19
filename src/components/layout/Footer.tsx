import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center">
            <p className="text-spotify-light-gray max-md:text-sm">
                &copy; Toan's Portfolio 2025, Designed with
                <FaHeart className="inline text-red-500 mx-2" />
                by Toan
            </p>
            <p className="text-spotify-light-gray max-md:text-sm mt-5">
                Built with NextJS, Tailwind, and Aceternity UI. Check out the source
                code{" "}
                <a
                    target="_blank"
                    href="https://github.com/ChefToan/portfolio"
                    className="text-spotify-green font-semibold underline"
                >
                    here
                </a>
                .
            </p>
        </div>
    );
}