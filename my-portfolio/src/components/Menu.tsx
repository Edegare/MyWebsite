import Button from "@/components/ui/button"
import { User, Briefcase, Mail, Award } from "lucide-react"

type MenuProps = {
  isDarkMode: boolean;
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

export default function Menu({ isDarkMode, currentSection, setCurrentSection }: MenuProps) {
      const menuOptions = [
    { id: "about", label: "Learn about Edgar!", icon: User, dialogue: "about" },
    { id: "projects", label: "Check Edgar's Project Inventory", icon: Briefcase, dialogue: "projects" },
    { id: "skills", label: "View Edgar's Abilities", icon: Award, dialogue: "skills" },
    { id: "contact", label: "Send Edgar a Message", icon: Mail, dialogue: "contact" },
  ]

    function handleMenuClick (option: { id: string }) {
        setCurrentSection(option.id);
    }

    return (
        <>
            <div className="space-y-4">
                {menuOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = currentSection === option.id;
                    return (
                    <Button
                        key={option.id}
                        onClick={() => handleMenuClick(option)}
                        variant={isActive ? "default" : "outline"}
                        size = "sm"
                        className={`w-full justify-start text-left h-auto p-4 transition-all ${
                        isActive
                            ? isDarkMode
                            ? "bg-primary hover:bg-green-500 text-black border-border-dark"
                            : "bg-primary hover:bg-green-700 text-white border-border"
                            : isDarkMode
                            ? "hover:bg-green-500/10 border-border-dark text-text"
                            : "hover:bg-green-100/50 border-border text-text-dark"
                        }`}
                    >
                        <Icon className="mr-3 h-5 w-5" />
                        <span className="text-lg">{option.label}</span>
                    </Button>
                    )
                })}
            </div>
        </>
)
}