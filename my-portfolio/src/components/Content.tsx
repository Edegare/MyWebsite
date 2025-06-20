import { motion, AnimatePresence } from "framer-motion";

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
        name: "English Resume",
        link: "/CV/Edgar_CV_EN.pdf", 
    },
    {
        name: "Portuguese Resume",
        link: "/CV/Edgar_CV_PT.pdf",
    }
]

const skills = [
    {name: "Java", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    {name: "C", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    {name: "C++", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    {name: "C#", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    {name: "Python", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    {name: "SQL", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    {name: "GO", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
    {name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    {name: "React", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    {name: "CSS", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    {name: "HTML", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    {name: "Git", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
]

const contact = {
    text: "Ready to start our next adventure together?",
    email: "mailto:edgarcferreira03@gmail.com",
    github: "https://github.com/Edegare",
    linkedin: "https://www.linkedin.com/in/edgar-ferreira-1aa033329/",
}

function sectionContent(section: string, isDarkMode: boolean) {
    switch (section) {
        case "about":
            return (
                <div className="space-y-2">
                    <h2 className={`text-xl font-semibold ${isDarkMode ? "text-text" : "text-text-darkt"}`}>
                        About
                    </h2>
                    <p className={`${isDarkMode ? "text-textSec" : "text-text-dark"}`}>
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
                <div className="space-y-2">
                    <h2 className={`text-xl font-semibold transition-all ${isDarkMode ? "text-text" : "text-text-darkt"}`}>
                        Projects
                    </h2>
                    <div className="space-y-4">
                        {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block p-4 rounded-xl border  duration-300 hover:scale-[1.01] transition-all${
                            isDarkMode
                                ? "bg-black/40 text-text border-border-dark hover:bg-black/30"
                                : "bg-white/40 text-text-darkt border-border hover:bg-white/40"
                            }`}
                        >
                            {/* Title + Rarity */} {/* EXTRA - Rarity shimmer */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="font-semibold">{project.name}</h3>
                                <span
                                    className={`text-sm px-2 py-1 rounded-xl transition-all ${
                                    isDarkMode
                                        ? "bg-primary text-black"
                                        : "bg-primary text-white"
                                    }`}
                                >
                                    {project.rarity}
                                </span>
                            </div>

                            {/* Description */}
                            <p className={`mt-2 text-sm transition-all ${isDarkMode ? "text-textSec" : "text-text-dark"}`}>
                                {project.description}
                            </p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((tech) => (
                                    <span
                                    key={tech}
                                    className={`inline-block px-3 py-1 text-sm rounded-xl transition-all ${
                                        isDarkMode
                                        ? "bg-primary text-black"
                                        : "bg-primary text-white"
                                    }`}
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </a>
                        ))}
                    </div>
                </div>
            );
        case "skills":
            return (
                <div className="space-y-2">
                    <h2 className={`text-xl font-semibold transition-all ${isDarkMode ? "text-text" : "text-text-darkt"}`}>
                        Skills
                    </h2>
                    <p className={`transition-all ${isDarkMode ? "text-textSec" : "text-text-dark"}`}>
                        
                    </p>
                </div>
            );
        case "contact":
            return (
                <div className="space-y-2">
                    <h2 className={`text-xl font-semibold transition-all ${isDarkMode ? "text-text" : "text-text-darkt"}`}>
                        Contacts
                    </h2>
                    <p className={`transition-all ${isDarkMode ? "text-textSec" : "text-text-dark"}`}>
                        
                    </p>
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
        <>
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
                        ? "bg-black/20 text-textSec border border-border-dark"
                        : "bg-white/20 text-textSec-dark border border-border"
                    }`}
                    >
                    {sectionContent(currentSection, isDarkMode)}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}