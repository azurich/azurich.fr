import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://modrinth.com/modpack/seasonworld"
                        title="Season World Modpack"
                        fullDescription={[
                            "Season World is a meticulously curated modpack designed to provide a diverse and immersive gaming experience. Each mod included in this pack has been selected to enhance various aspects of the game, from space exploration to expansive landscapes, improved travel systems, and practical survival tools. In addition to the mods, we have integrated resource packs and shaders to visually enhance your world.",
                        ]}
                        cardImage="https://drive.google.com/file/d/1FFIWvuYPBtPFbZODZzZDat_Ba_-uHjtp/view?usp=drive_link"
                        cardDescription="Season World is a meticulously curated modpack designed to provide a diverse and immersive gaming experience. Each mod included in this pack has been selected to enhance various aspects of the game, from space exploration to expansive landscapes, improved travel systems, and practical survival tools. In addition to the mods, we have integrated resource packs and shaders to visually enhance your world."
                        media={[
                            "https://drive.google.com/file/d/1ni-BZbe2FxRtNFHJC3a49rSv66yZQ6c0/view?usp=drive_link",
                            "https://drive.google.com/file/d/1xoWWTYQAqVaQXqmGT9y7aiGUMp0R3KqR/view?usp=drive_link",
                            "https://drive.google.com/file/d/1PakJ0KSkpjIyQArxmMPCxvNNc3dBdLZi/view?usp=drive_link",
                            "https://drive.google.com/file/d/1nOPbvTEWiHyrTkuihlXt7OCqCDYHANAE/view?usp=drive_link",
                        ]}
                        myRole="Founder"
                        timeline="July 2024 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
