import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { experiences } from "@/data/experience";
import { Experience } from "@/types";
import { motion } from "framer-motion";

export default function ExperienceItem() {
    return (
        <motion.section
            className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
            <motion.div 
                className="bg-spotify-gray p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-xl font-bold mb-1">Professional Experience</h2>
                <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
                    <CiGlobe className="text-lg" />
                    {experiences.length} positions • {new Date().getFullYear() - 2022} years
                </p>
            </motion.div>

            <motion.div 
                className="px-4 py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <motion.button 
                            className="rounded-full bg-spotify-green p-3.5 hover:scale-105 transition-transform"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay className="text-spotify-black text-sm" />
                        </motion.button>
                        <motion.div 
                            className="flex items-center gap-5"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                        >
                            <IoShuffle className="text-3xl text-spotify-grey sm:hover:text-white transition-colors" />
                            <FiPlusCircle className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
                            <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
                            <BsThreeDots className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                    >
                        <RxHamburgerMenu className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
                    </motion.div>
                </div>
            </motion.div>

            <Positions />
        </motion.section>
    );
}

function Positions() {
    return (
        <motion.div 
            className="px-4 pb-4 md:overflow-y-auto sm:h-[300px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
            {experiences.map((position: Experience, index) => (
                <motion.div
                    className="flex items-center gap-4 p-2.5 sm:hover:bg-[#282828] rounded-lg transition-colors group"
                    key={`${position.companyName}-${position.positionTitle}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 0.5, 
                        delay: 1.7 + (index * 0.1), 
                        ease: "easeOut",
                        scale: { duration: 0.1 },
                        y: { duration: 0.1 }
                    }}
                    whileHover={{ 
                        scale: 1.02, 
                        y: -2,
                        transition: { duration: 0.1 }
                    }}
                    whileTap={{ scale: 0.98 }}
                >
          <span className="text-spotify-grey sm:group-hover:text-white min-w-[20px]">
            {index + 1}
          </span>
                    <div className="flex-1">
                        <p className="text-spotify-green text-sm font-semibold mb-0.5">
                            {position.companyName}
                        </p>
                        <p className="font-bold text-md mb-0.5">{position.positionTitle}</p>
                        <p className="text-spotify-gray text-sm">{position.date}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}

// Experience data is now imported from @/data/experience
// and uses the Experience type from @/types