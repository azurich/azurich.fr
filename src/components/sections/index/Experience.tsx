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
                        cardImage="https://cdn.discordapp.com/attachments/931502258229751829/1332388281740038225/giqhlh0p.png?ex=679512c8&is=6793c148&hm=94a7c785c72e63aea4eec9e54262fd91d02b6a3342885508c73710e1f19118b9&"
                        cardDescription="Season World is a meticulously curated modpack designed to provide a diverse and immersive gaming experience. Each mod included in this pack has been selected to enhance various aspects of the game, from space exploration to expansive landscapes, improved travel systems, and practical survival tools. In addition to the mods, we have integrated resource packs and shaders to visually enhance your world."
                        media={[
                            "https://cdn.discordapp.com/attachments/931502258229751829/1332388436862042280/0da4a2b32941ae3b9e6b79da2cd7bd55acae2f42.png?ex=679512ed&is=6793c16d&hm=af5588057b94b8111222d8c9937c309575622d5db6433a0d5f41072c522132e1&",
                            "https://cdn.discordapp.com/attachments/931502258229751829/1332388437793443891/b58d072cb143efab0bf418647e0728a5f5104633.png?ex=679512ee&is=6793c16e&hm=c7a8786878cc06160043bd925bcf0ae3b9d8cbd0a789652bc962b078dec47618&",
                            "https://cdn.discordapp.com/attachments/931502258229751829/1332388438783299634/b513dc2bdceb0882347b3bd02c7b47c436efedd4.png?ex=679512ee&is=6793c16e&hm=bd5e1508f7c0f69b2124ea4708f3bcf4c17fa9389560964d07f05ecb5f130fc0&",
                            "https://cdn.discordapp.com/attachments/931502258229751829/1332388439710109727/f6b19b51066def1548efd7176d4d3d16e64e6fe1.png?ex=679512ee&is=6793c16e&hm=429d6845a0c8313a3d9ae8f0f2ffd209b9e413b4b0e84230b2ed48a1d3e31634&",
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
