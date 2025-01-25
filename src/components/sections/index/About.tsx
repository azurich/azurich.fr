import AboutCard from "@/components/AboutCard";
import { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import PresenceCard from "@/components/PresenceCard";
import { useEffect, useState } from "react";

export default function About() {
  let otherTech: Tech[] = [
    { title: "Windows Server", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332308719500922891/vps_windows.webp?ex=6794c8af&is=6793772f&hm=08e89894ca3ed617831c531617d78cf42f10c2276a5670fe0468b480330f63c8&" />, link: "https://www.microsoft.com/fr-fr/windows-server" },
    { title: "Debian", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311486823006268/15706396.png?ex=6794cb43&is=679379c3&hm=b634ab00704c4a61def7a336c655ecf14f45314cccf69475428f779ca9de9515&" />, link: "https://www.debian.org" },
    { title: "ArchLinux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311804126433393/arch-linux.png?ex=6794cb8f&is=67937a0f&hm=db2fcfb1ad3f75c9cbcf48e8f08fd7dbe1500a0b110062bd32bc034a097e0dac&" />, link: "https://archlinux.org" },
    { title: " VMware Workstation Pro", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311874401730560/Vmware_workstation_16_icon.svg.png?ex=6794cba0&is=67937a20&hm=21207634cc51449a17179f0a1ba71db1cff2a26766b5beb8dd326a0e5aeee464&" />, link: "https://www.vmware.com" },
    { title: "vSphere", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311892072599632/1732543884-vmware-vsphere.webp?ex=6794cba4&is=67937a24&hm=0c59f20712bf7c333cbc1fe2c518a365baf96066517512c94e64a2aa03ec2170&" />, link: "https://www.vmware.com/products/cloud-infrastructure/vsphere" },
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311919096500287/symbol_blue-docker-logo.webp?ex=6794cbaa&is=67937a2a&hm=82f029cb260bed8df38d207b94d8cb72847f9f88f3549b86764043645a550b2d&" />, link: "https://www.docker.com" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332313219485663305/25231.png?ex=6794cce0&is=67937b60&hm=ba0217fd49b7833847f373af37ee7fe6e1ed1275de32690c115c79691450e5a5&" />, link: "https://github.com" },
    { title: " Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311961857425418/Visual_Studio_Code_1.35_icon.svg.png?ex=6794cbb4&is=67937a34&hm=58b4701f10e62dc01b6609fdb77bf6daff09a4be65cc61a028e75f98f4fcb8e1&" />, link: "https://code.visualstudio.com" },
    { title: "Tailscale", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332311990345011241/Microsoft.VisualStudio.Services.Icons.png?ex=6794cbbb&is=67937a3b&hm=d53cfdae427877a0b7f21b5a4d130f7dff6254b3e241f92348a510588f90e740&" />, link: "https://tailscale.com" },
    { title: "Cloudflare", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332312018979520556/icon_6825.png?ex=6794cbc2&is=67937a42&hm=bead5adad6f9358bee891dae8c85a5d7074731271964631f0d75e8d5cd8c3a27&" />, link: "https://www.cloudflare.com" },
    { title: "Veeam", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332313237244608574/veeam.png?ex=6794cce4&is=67937b64&hm=ae42ff1f3f5d580ec2993d0764dcea332bfb099856aff251db5a548b6382ed92&" />, link: "https://www.veeam.com" },
    { title: "Powershell", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332312069118099476/Powershell_256.png?ex=6794cbce&is=67937a4e&hm=91adf6cd2788d65ba370992e31f48e4b71d8916c33a881ff35d0fa552088fa49&" />, link: "https://fr.wikipedia.org/wiki/Windows_PowerShell" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/attachments/931502258229751829/1332312170565730345/Discord.js.png?ex=6794cbe6&is=67937a66&hm=db145d4ab0c1da2fd9caef03e680f07424c9f8efab598b9f839f5a3635c935a6&" />, link: "https://discord.js.org" },
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
