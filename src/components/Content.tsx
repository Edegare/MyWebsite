import {motion, AnimatePresence} from "framer-motion";
import Badge from "@components/ui/badge";
import {Mail} from "lucide-react"
import { JSX } from "react";

const rarityStyles = {
  Mythical: "bg-pink-500",
  Legendary: "bg-yellow-400",
  Epic: "bg-purple-500",
  Rare: "bg-sky-500",
};

const projects = [
    {
        name: "Pascal Compiler",
        tech: ["Python", "EWVM"],
        rarity: "Mythical",
        link: "https://github.com/Edegare/Pascal-Compiler-PL",
        description: "A modular Python compiler that translates standard Pascal code into EWVM machine code, featuring lexical, syntactic, semantic analysis plus an interactive AST visualizer",
    },
    {
        name: "3D Engine",
        tech: ["C++", "OpenGL"],
        rarity: "Legendary",
        link: "https://github.com/Edegare/3DEngine-CG",
        description: "A mini 3D engine based on a scene graph structure, that includes a geometry generator and supports hierarchical transformations, animations, VBOs, textures and lightning",
    },
    {
        name: "Secure Vault",
        tech: ["Python"],
        rarity: "Epic",
        link: "https://github.com/Edegare/Secure-Vault-SSI",
        description: "A secure client-server vault written in python for encrypted file storage and sharing, featuring X.509 authentication, AES-GCM encryption, and CLI-based access control",
    },
    {
        name: "Distributed Network Monitoring System",
        tech: ["Go","CORE"],
        rarity: "Rare",
        link: "https://github.com/Edegare/Network-Monitoring-System-CC",
        description: "Distributed Network Monitoring system with custom UDP and TCP protocols for collecting and alerting network metrics",
    },
]

const about = "I'm a passionate software engineer who loves creating experiences that feel magical. With a strong foundation in computer science and a knack for problem-solving, I thrive on turning complex challenges into elegant solutions. When I'm not coding, you can find me exploring new technologies, doing some sports, or playing video games. You can also check my resume for more details about my journey and skills:";

const resumes = [
  {
    name: "🇬🇧 English Resume",
    link: "/CV/Edgar_CV_EN.pdf",
  },
  {
    name: "🇵🇹 Portuguese Resume",
    link: "/CV/Edgar_CV_PT.pdf",
  },
];

const skills = [
    {name: "Java", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    {name: "C", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    {name: "C++", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    {name: "C#", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    {name: "Python", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    {name: "SQL", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    {name: "GO", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
    {name: "JavaScript", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    {name: "React", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    {name: "CSS", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    {name: "HTML", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    {name: "Git", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
]

const gitrepo = "https://github.com/Edegare?tab=repositories"

const contact: { name: string; link: string; icon: JSX.Element }[] = [
  { name: "Gmail", link: "mailto:edgarcferreira03@gmail.com", icon: <Mail size={18} /> },
  { name: "GitHub", link: "https://github.com/Edegare", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4" /> },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/edgar-ferreira-1aa033329/", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-4 h-4" /> },
];


function sectionContent(section: string, isDarkMode: boolean) {
    switch (section) {
        case "about":
            return (
                <div className="space-y-4">
                    <h2 className={`text-xl font-semibold ${isDarkMode ? "text-text" : "text-text-dark"}`}>
                        About Edgar
                    </h2>
                    <p className={`${isDarkMode ? "text-textSec" : "text-textSec-dark"}`}>
                        {about}
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 pt-2">
                        {resumes.map((resume) => (
                            <a
                            key={resume.name}
                            href={resume.link}
                            download
                            className={`inline-block px-4 py-2 rounded-xl transition-all ${
                                isDarkMode
                                ? "bg-primary hover:bg-hover-lighter text-black border-border-dark"
                                : "bg-primary hover:bg-hover-darkerSel text-white border-border"
                            }`}
                            >
                            {resume.name}
                            </a>
                        ))}
                        </div>
                </div>
            );
        case "projects":
            return (
                <div className="space-y-4">
                    <h2 className={`text-xl font-semibold transition-all ${isDarkMode ? "text-text" : "text-text-dark"}`}>
                        Inventory
                    </h2>
                    <div className="space-y-4">
                        {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block p-4 rounded-xl border duration-300 hover:scale-[1.01] transition-all ${
                            isDarkMode
                                ? "bg-black/40 text-text border-border-dark"
                                : "bg-white/40 text-text-dark border-border"
                            }`}
                        >
                            {/* Title + Rarity */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="font-semibold">{project.name}</h3>
                                <Badge
                                    className={`relative overflow-hidden
                                        ${rarityStyles[project.rarity as keyof typeof rarityStyles] ?? "bg-gray-400"} ${
                                    isDarkMode
                                        ? "text-black"
                                        : "text-white"
                                    }`}
                                    >
                                    <span className="relative z-10">{project.rarity}</span>
                                    <span
                                        className="absolute inset-0 z-0 bg-[linear-gradient(70deg,_rgba(255,255,255,0)_45%,_rgba(255,255,255,0.5)_50%,_rgba(255,255,255,0)_55%)]
                                        bg-[length:250%_100%] animate-shimmer opacity-70"
                                    />
                                </Badge>
                            </div>

                            {/* Description */}
                            <p className={`mt-2 text-sm transition-all ${isDarkMode ? "text-textSec" : "text-textSec-dark"}`}>
                                {project.description}
                            </p>

                                

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((tech) => (
                                    <Badge
                                    key={tech}
                                    className={`${
                                        isDarkMode ? "bg-primary text-black" : "bg-primary text-white"
                                    }`}
                                    >
                                    {tech}
                                    </Badge>
                                ))}
                            </div>
                        </a>
                        ))}
                    </div>
                    {/* Centered Button */}
                    <div className="flex justify-center">
                        <a
                        href={gitrepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2 rounded-xl transition-all hover:scale-[1.1] ${
                            isDarkMode
                            ? "bg-black/40 text-text border border-border-dark hover:bg-black/30"
                            : "bg-white/40 text-text-dark border border-border hover:bg-white/60"
                        }`}
                        >
                        More Projects
                        </a>
                    </div>
                </div>
            );
        case "skills":
            return (
                <div className="space-y-4">
                    <h2 className={`text-xl font-semibold transition-all ${isDarkMode ? "text-text" : "text-text-dark"}`}>
                        Special Abilities
                    </h2>
                    <div className={`grid md:grid-cols-2 gap-4`}>
                        {skills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        {/* Icon + Name */}
                                        <div className="flex gap-3">
                                            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                                            <h3 className={`${isDarkMode ? "text-textSec" : "text-textSec-dark"}`}>
                                                {skill.name}
                                            </h3>
                                        </div>
                                        {/* Level percentage */}
                                        <span className={`text-sm ${isDarkMode ? "text-textSec" : "text-textSec-dark"}`}>{skill.level}%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className={`w-full h-3 rounded-full overflow-hidden bg-gray-500/10`}>
                                    <div
                                        className={`h-full rounded-full transition-all bg-gradient-to-r ${
                                            isDarkMode ? "from-primary-light to-secondary-light" : "from-primary to-secondary"
                                        }`}
                                        style={{width: `${skill.level}%`}}
                                    />
                                </div>
                            </div>
                            )
                        )}
                    </div>
                    <p className={`text-center text-4xl ${isDarkMode ? "text-textSec" : "text-textSec-dark"}`}>...</p>
                </div>
            );

        case "contact":
            return (
                <div className="space-y-4">
                    <h2 className={`text-xl font-semibold transition-all ${isDarkMode ? "text-text" : "text-text-dark"}`}>
                        Let's Connect!
                    </h2>
                    <div className="flex flex-col items-center gap-3">
                        {contact.map((cont) => (
                        <a
                            key={cont.name}
                            href={cont.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all hover:scale-[1.01] border ${
                            isDarkMode
                                ? "bg-primary hover:bg-hover-lighter text-black border-border-dark"
                                : "bg-primary hover:bg-hover-darkerSel text-white border-border"
                            }`}
                        >
                            {cont.icon}
                            <span>{cont.name}</span>
                        </a>
                        ))}
                    </div>
                </div>
            );
        default:
            return null;
    }
}

type ContentProps = {
    isDarkMode: boolean;
    currentSection: string;
};

export default function Content({isDarkMode, currentSection}: ContentProps) {

    return (
            <AnimatePresence mode="wait">
                {currentSection !== "home" && (
                    <motion.div
                    key={currentSection}
                    initial={{opacity: 0, y: 20 }}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.3, ease: "easeOut" }}
                    className={`p-4 rounded-xl space-y-1 ${
                        isDarkMode
                        ? "bg-black/20 border border-border-dark"
                        : "bg-white/20 border border-border"
                    }`}
                    >
                    {sectionContent(currentSection, isDarkMode)}
                    </motion.div>
                )}
            </AnimatePresence>
    )
}