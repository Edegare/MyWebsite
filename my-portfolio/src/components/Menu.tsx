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
                        className={`w-full justify-start text-left h-auto p-4 transition-all ${
                        isActive
                            ? isDarkMode
                            ? "bg-green-600 hover:bg-green-500 text-black border-green-500"
                            : "bg-green-600 hover:bg-green-700 text-white border-green-600"
                            : isDarkMode
                            ? "hover:bg-green-500/10 border-green-500/30 text-green-400"
                            : "hover:bg-green-100/50 border-green-300 text-green-800"
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