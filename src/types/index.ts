export interface Project {
    href: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    tech: string[];
}

export interface Experience {
    companyName: string;
    positionTitle: string;
    date: string;
}

export interface ProjectsProps {
    onSetExperienceSection?: () => void;
    className?: string;
}