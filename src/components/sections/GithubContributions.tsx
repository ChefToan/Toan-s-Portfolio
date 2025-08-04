import React, { useEffect, useState, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GithubContributions: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            const scrollToRight = () => {
                if (window.innerWidth < 1024) {
                    const contributionSection = document.getElementById('contribution');

                    if (!contributionSection) {
                        return false;
                    }

                    const calendarContainer = contributionSection.querySelector('.overflow-x-auto') ||
                                             contributionSection.querySelector('[data-testid="react-github-calendar"]') ||
                                             contributionSection.querySelector('.react-github-calendar');

                    if (!calendarContainer) {
                        return false;
                    }

                    if (calendarContainer.scrollWidth > calendarContainer.clientWidth) {
                        const maxScrollLeft = calendarContainer.scrollWidth - calendarContainer.clientWidth;
                        calendarContainer.scrollTo({
                            left: maxScrollLeft,
                            behavior: 'smooth'
                        });
                        return true;
                    }

                    const allElements = calendarContainer.querySelectorAll('*');

                    for (const element of allElements) {
                        const htmlElement = element as HTMLElement;
                        if (htmlElement.scrollWidth > htmlElement.clientWidth) {
                            const maxScrollLeft = htmlElement.scrollWidth - htmlElement.clientWidth;
                            htmlElement.scrollTo({
                                left: maxScrollLeft,
                                behavior: 'smooth'
                            });
                            return true;
                        }
                    }

                    return false;
                } else {
                    return true;
                }
            };

            let retryCount = 0;
            const maxRetries = 15;

            const attemptScroll = () => {
                const success = scrollToRight();

                if (!success && retryCount < maxRetries) {
                    retryCount++;
                    const delay = Math.min(300 * Math.pow(1.3, retryCount), 2000);
                    setTimeout(attemptScroll, delay);
                }
            };

            setTimeout(attemptScroll, 1000);

            const handleResize = () => {
                setTimeout(() => scrollToRight(), 200);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [loading]);

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
                    ref={calendarRef}
                    className="w-full items-center content-center justify-center justify-items-center overflow-x-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <GitHubCalendar
                        username="ChefToan"
                        blockSize={11}
                        blockMargin={2}
                        fontSize={12}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

export default GithubContributions;
