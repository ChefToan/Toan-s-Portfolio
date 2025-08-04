import React from "react";
import { motion } from "framer-motion";

const SpotifyAlbum: React.FC = () => {
    return (
        <motion.div
            className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black border-t-2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
        >
            <motion.iframe
                data-testid="embed-iframe"
                className="w-full h-full rounded-xl border-0 md:aspect-video lg:aspect-auto"
                src="https://open.spotify.com/embed/playlist/5ait08dKw5MrTDYUbM8Q9z?utm_source=generator&theme=0"
                width="100%"
                height="280"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            />
        </motion.div>
    );
};

export default SpotifyAlbum;