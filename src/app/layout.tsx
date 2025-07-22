// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navigation from "@/components/layout/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { GeneralProvider } from "@/contexts/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Toan Pham",
    description: "Full Stack Developer & Software Engineer",
    keywords: ["Software Engineer", "Full Stack Developer", "React", "TypeScript"],
    creator: "Toan Pham",
    authors: [{ name: "Toan Pham" }],
    icons: {
        icon: "/toan-pfp.png",
        shortcut: "/toan-pfp.png",
        apple: [
            { url: "/toan-pfp.png" },
            { url: "/toan-pfp.png", sizes: "180x180", type: "image/png" },
        ],
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://toanpham.dev",
        title: "Toan Pham | Software Engineer",
        description:
            "Full-stack software engineer specializing in web development and modern technologies.",
        siteName: "Toan Pham Portfolio",
        images: [
            {
                url: `/portfolio_preview.png`,
                width: 1200,
                height: 630,
                alt: "Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Toan Pham | Software Engineer",
        description:
            "Full-stack software engineer specializing in web development and modern technologies.",
        images: [`/portfolio_preview.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link
                rel="icon"
                href="/icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
            <link
                rel="apple-touch-icon"
                href="/apple-icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
            {/* Structured data for rich Google search results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Toan Pham",
                        url: "https://toanpham.dev",
                        image: "https://toanpham.dev/portfolio_preview.png",
                        sameAs: [
                            "https://www.linkedin.com/in/toanphamasu/",
                            "https://github.com/ChefToan",
                        ],
                        jobTitle: "Software Engineer",
                        worksFor: {
                            "@type": "Organization",
                            name: "Freelance",
                        },
                        description:
                            "Full-stack software engineer passionate about web development and modern technologies.",
                    }),
                }}
            />
        </head>
        <body className={inter.className}>
        <GeneralProvider>
            <Navigation />
            {children}
            <Analytics />
        </GeneralProvider>
        </body>
        </html>
    );
}