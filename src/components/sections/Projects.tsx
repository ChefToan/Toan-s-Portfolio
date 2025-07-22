import { ProjectsProps } from "@/types";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
    return (
        <motion.div
            className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden flex flex-col"
            id="projects"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
            <motion.div 
                className="p-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
                <div className="flex gap-3 justify-center">
                    <motion.button
                        className="flex items-center justify-center text-sm font-bold
            bg-gray-600 cursor-not-allowed
            px-5 py-2 rounded-full gap-2 transition-all duration-200
            min-w-[180px] opacity-60"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        disabled
                    >
                        Featured Projects
                        <FaArrowDown className="text-base" />
                    </motion.button>

                    <motion.button
                        className="flex items-center justify-center text-sm font-bold
            border border-gray-600 cursor-not-allowed
            text-gray-400 px-5 py-2 rounded-full gap-2 transition-all duration-200
            min-w-[180px] opacity-60"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                        disabled
                    >
                        Explore All Projects
                        <GrLinkNext className="text-base" />
                    </motion.button>
                </div>
            </motion.div>
            <motion.div
                className="flex-1 flex items-center justify-center p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                        className="mx-auto w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center"
                    >
                        <FaExclamationTriangle className="text-2xl text-orange-500" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="text-xl font-semibold text-white"
                    >
                        Failed to Load Projects
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="text-gray-400 text-sm max-w-xs"
                    >
                       Please check back soon.
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
}

