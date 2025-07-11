import Button from "@/components/ui/button"
import { Sun, Moon } from "lucide-react";

export default function Header({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) {
  return (
    <div className="text-center lg:text-left">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1
            className={`text-4xl font-bold mb-2 transition-all bg-gradient-to-r ${
              isDarkMode ? "from-text to-textSec" : "from-text-dark to-textSec-dark"
            } bg-clip-text text-transparent`}
          >
            Edgar's Digital Realm
          </h1>
          <p className={isDarkMode ? "text-textSec" : "text-textSec-dark"}>Choose your adventure!</p>
        </div>
        <Button
          onClick={toggleDarkMode}
          variant="outline"
          size="icon"
          className={`justify-center ${
            isDarkMode
              ? "bg-black/20 border-border-dark text-text hover:bg-hover-lighter/10"
              : "bg-white/20 border-border text-text-dark hover:bg-hover-darkerNor/50"
          }`}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </div>
  )
}
