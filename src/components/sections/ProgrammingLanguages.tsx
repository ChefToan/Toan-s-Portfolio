import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProgrammingLanguages() {
    return (
        <motion.div
            className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
            id="programming-languages"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
            <div className="p-6">
                <motion.h1 
                    className="text-xl font-bold mb-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    Programming Languages
                </motion.h1>
                <motion.div 
                    className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    {languageItems.map((item, index) => (
                        <motion.div
                            className="flex items-center justify-center p-2.5 rounded-lg sm:hover:bg-[#282828] transition-all duration-200"
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 1.0 + (index * 0.1), 
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                scale: 1.15, 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.component}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

const languageItems: {
    name: string;
    component: ReactNode;
}[] = [
    {
        name: "Python",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                width={32}
                height={32}
                alt="Python"
            />
        ),
    },
    {
        name: "Java",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                width={32}
                height={32}
                alt="Java"
            />
        ),
    },
    {
        name: "JavaScript",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                width={32}
                height={32}
                alt="JavaScript"
            />
        ),
    },
    {
        name: "TypeScript",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                width={32}
                height={32}
                alt="TypeScript"
            />
        ),
    },
    {
        name: "C",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                width={32}
                height={32}
                alt="C"
            />
        ),
    },
    {
        name: "C++",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                width={32}
                height={32}
                alt="C++"
            />
        ),
    },
    {
        name: "SQL",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                width={32}
                height={32}
                alt="SQL"
            />
        ),
    },
    {
        name: "Swift",
        component: (
            <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
                width={32}
                height={32}
                alt="Swift"
            />
        ),
    },
];