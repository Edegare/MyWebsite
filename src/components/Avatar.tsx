import camisaLaranja from "@/assets/CamisaLaranja.jpg";
import { Code } from "lucide-react"
import { useEffect, useState } from "react";


type AvaProps = {
    isDarkMode: boolean;
    currentSection: string;
};

const dialogues = {
    welcome: "Hi, I'm Edgar! Welcome to my digital realm! What adventure shall we embark on today?",
    about: "Ah, curious about my backstory? Let me show you what makes me... me.",
    projects: "Let me show you my treasure chest of projects! Each one is a quest I've completed.",
    skills: "These are some of the special abilities I've mastered on my coding journey!",
    contact: "Ready to team up? Let's connect and create something amazing together!",
}

export default function Avatar({isDarkMode, currentSection}: AvaProps) {
    const fullText = dialogues[currentSection as keyof typeof dialogues] || dialogues.welcome;
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(true)

    useEffect(() => {
        setDisplayedText(""); 
        setIsTyping(true);

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 40); // ms por letra

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
                {/*Avatar*/}
                <div
                    className={`w-64 h-64 rounded-full flex items-center justify-center overflow-hidden transition-all ${
                        isDarkMode
                        ? " bg-gradient-to-br from-primary to-secondary"
                        : "bg-gradient-to-br from-primary-light to-secondary-light"
                    }`}
                >
                    {imageLoaded ? (
                        <img
                            src={camisaLaranja}
                            alt=""
                            className={`w-52 h-52 object-cover rounded-full border-4 shadow-md transition-all ${
                                isDarkMode
                                ? "border-black"
                                : "border-white"
                            }`}
                            onError={() => setImageLoaded(false)}
                        />
                    ) : (
                        <span className="text-8xl leading-none">🧙‍♂️</span>
                    )}
                </div>
                <div className="absolute -bottom-4 -left-4 animate-pulse">
                    <Code className={`h-8 w-8 transition-all ${isDarkMode ? "text-text" : "text-text-dark"}`} />
                </div>
            </div>

            {/* dialog box */}
            <div
                className={`grid grid-cols-[2rem_auto] gap-x-2 shadow-md transition-all ${
                    isDarkMode ? "bg-black/20 text-textSec border shadow-md shadow-border-dark border-border-dark" : "bg-white/20 text-textSec-dark border shadow-border border-border"
                } max-w-md p-4 rounded-xl space-y-1 min-h-[130px]`}
            >
                {/* avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    isDarkMode ? "bg-primary text-black" : "bg-primary-light text-white"
                }`}>
                    E
                </div>

                {/* name */}
                <div className={`transition-all ${isDarkMode ? "text-text" : "text-text-dark"} font-semibold`}>
                    Edgar
                </div>

                {/* space to align grid */}
                <div></div>

                {/* text */}
                <div className={`transition-all ${isDarkMode ? "text-textSec" : "text-textSec-dark"}`}>
                    <span>{displayedText}</span>
                    {isTyping && <span className="animate-pulse">|</span>}
                </div>
            </div>

        </div>
   
    )
}