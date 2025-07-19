import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GithubContributions: React.FC = () => {
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        // Simulate loading time (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 0);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <motion.div
            className="flex py-2 px-3 max-lg:col-span-1 max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
            id="contribution"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
            {loading ? (
                <motion.div 
                    className="rounded-md p-4 max-w-lg w-full mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-spotify-green rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-spotify-green rounded col-span-2"></div>
                                    <div className="h-2 bg-spotify-green rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-spotify-green rounded"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div 
                    className="w-full items-center content-center justify-center justify-items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <GitHubCalendar
                        username="ChefToan"
                        blockSize={11} // Size of each block
                        blockMargin={2} // Margin between blocks
                        fontSize={12} // Font size for the text
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

export default GithubContributions;