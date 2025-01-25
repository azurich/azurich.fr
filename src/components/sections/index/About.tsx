import AboutCard from "@/components/AboutCard";
import { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import PresenceCard from "@/components/PresenceCard";
import { useEffect, useState } from "react";

export default function About() {
  let otherTech: Tech[] = [
    { title: "Windows Server", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/vszyi2sm.webp" />, link: "https://www.microsoft.com/fr-fr/windows-server" },
    { title: "Debian", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/mfyc1lr9.webp" />, link: "https://www.debian.org" },
    { title: "ArchLinux", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/k6hqwu48.webp" />, link: "https://archlinux.org" },
    { title: " VMware Workstation Pro", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/cp47uk6o.webp" />, link: "https://www.vmware.com" },
    { title: "vSphere", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/th91bd45.webp" />, link: "https://www.vmware.com/products/cloud-infrastructure/vsphere" },
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/26pne9k8.webp" />, link: "https://www.docker.com" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/sk1hjzs8.webp" />, link: "https://github.com" },
    { title: " Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/0run6ai3.webp" />, link: "https://code.visualstudio.com" },
    { title: "Tailscale", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/uy9tsqx7.webp" />, link: "https://tailscale.com" },
    { title: "Cloudflare", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/zgq5vzt3.webp" />, link: "https://www.cloudflare.com" },
    { title: "Veeam", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/yc1kptlt.webp" />, link: "https://www.veeam.com" },
    { title: "Powershell", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/kcs4bcg5.webp" />, link: "https://fr.wikipedia.org/wiki/Windows_PowerShell" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/za3jjc4w.webp" />, link: "https://discord.js.org" },
  ]

  const [presence, setPresence] = useState<Presence | null>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const socket = new WebSocket(`wss://api.azurich.fr/presence`)
  
    const handleOpen = () => {
      socket.send("Connection established")
    }
  
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "connected") return
      if (event.data === "pong") return
      setPresence(JSON.parse(event.data))
    }

    let ping = setInterval(() => {
      socket.send("ping")
    }, 10000)
  
    socket.addEventListener("open", handleOpen)
    socket.addEventListener("message", handleMessage)
  
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
  
    return () => {
      socket.removeEventListener("open", handleOpen)
      socket.removeEventListener("message", handleMessage)
      socket.close()
      clearInterval(ping)
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="I've had a passion for IT since I was a kid, and I studied IT, starting with the basics and including home automation, then moving on to technical support, and finally becoming a system and network administrator. I also enjoy working on small development projects despite my poor level of coding skills..."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Toolbox"
            description="The different tools I use and master quite well"
            tech={otherTech}
            direction="bottom"
            span={presence && presence.activities.length > 0 ? 1 : 2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          {presence && presence.activities.length > 0 &&
            <PresenceCard
              presence={presence}
              date={date}
              direction="bottom"
              span={1}
              delay={0.1}
              gradient="bg-gradient-to-tl"
            />
          }
        </ul>
      </section>
    </>
  );
}
