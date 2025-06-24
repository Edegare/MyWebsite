import { Mail } from "lucide-react";
import { JSX } from "react";

const contact: { name: string; link: string; icon: JSX.Element }[] = [
  {
    name: "Gmail",
    link: "mailto:edgarcferreira03@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    name: "GitHub",
    link: "https://github.com/Edegare",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        alt="GitHub"
        className="w-4 h-4"
      />
    ),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/edgar-ferreira-1aa033329/",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        className="w-4 h-4"
      />
    ),
  },
];

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <footer
            className={`w-full flex justify-between items-center px-6 py-4 mt-8 border-t ${
                isDarkMode
                ? "border-border-dark text-text"
                : "border-border text-text-dark"
            }`}
        >
            <span className="text-sm">&copy;  {new Date().getFullYear()} Edgar Ferreira</span>

            <div className="flex gap-3">
                {contact.map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                        isDarkMode
                            ? "bg-primary hover:bg-hover-lighter text-black"
                            : "bg-primary hover:bg-hover-darkerSel text-white"
                        }`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}
