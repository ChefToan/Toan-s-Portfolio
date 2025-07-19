import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "@/types";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
    return (
        <motion.div
            className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
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
            bg-spotify-green hover:bg-spotify-dark-green hover:scale-105
            px-5 py-2 rounded-full gap-2 transition-all duration-200
            min-w-[180px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Featured Projects
                        <FaArrowDown className="text-base" />
                    </motion.button>

                    <motion.button
                        className="flex items-center justify-center text-sm font-bold
            border border-[#727272] hover:border-white hover:scale-105
            text-white px-5 py-2 rounded-full gap-2 transition-all duration-200
            animate-pulse hover:animate-none hover:bg-white hover:text-black
            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            min-w-[180px]"
                        onClick={onSetExperienceSection}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore All Projects
                        <GrLinkNext className="text-base" />
                    </motion.button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
                <StickyScroll content={projectLists} />
            </motion.div>
        </motion.div>
    );
}

const projectLists: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
}[] = [
    {
        title: "E-Commerce Platform ⭐️",
        description:
            "A full-stack e-commerce platform with modern design and seamless user experience. Built with Next.js, TypeScript, and integrated with Stripe for payments.",
        content: (
            <a target="_blank" href="#">
                <Image
                    src={`/project-1.jpg`}
                    alt="E-Commerce Platform"
                    width={500}
                    height={500}
                />
            </a>
        ),
    },
    {
        title: "🤖 AI Task Manager",
        description:
            "An intelligent task management application with AI-powered productivity insights and automated scheduling. Features real-time collaboration and smart notifications.",
        content: (
            <a target="_blank" href="#">
                <Image
                    src={`/project-2.jpg`}
                    alt="AI Task Manager"
                    width={500}
                    height={500}
                />
            </a>
        ),
    },
    {
        title: "Real Estate Platform 🏠",
        description:
            "A comprehensive real estate platform with virtual tours, property management, and mortgage calculations. Includes 3D visualizations and interactive maps.",
        content: (
            <a target="_blank" href="#">
                <Image
                    src={`/project-3.jpg`}
                    alt="Real Estate Platform"
                    loading="lazy"
                    width={500}
                    height={300}
                />
            </a>
        ),
    },
    {
        title: "💪 Fitness Tracker App",
        description:
            "A mobile-first fitness application with workout tracking, nutrition planning, and social features. Built with React Native and includes real-time analytics.",
        content: (
            <a target="_blank" href="#">
                <Image
                    src={`/project-4.jpg`}
                    alt="Fitness Tracker App"
                    loading="lazy"
                    width={500}
                    height={300}
                />
            </a>
        ),
    },
];