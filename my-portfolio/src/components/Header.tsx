import Button from "@/components/ui/button"
import { Sun, Moon } from "lucide-react";

export default function Header({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) {
  return (
    <div className="text-center lg:text-left">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1
            className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
              isDarkMode ? "from-green-400 to-emerald-200" : "from-green-600 to-emerald-700"
            } bg-clip-text text-transparent`}
          >
            Edgar's Digital Realm
          </h1>
          <p className={isDarkMode ? "text-green-300" : "text-green-700"}>Choose your adventure!</p>
        </div>
        <Button
          onClick={toggleDarkMode}
          variant="outline"
          size="sm"
          className={`justify-center ${
            isDarkMode
              ? "border-green-700 text-green-300 hover:bg-green-500/10"
              : "border-green-300 text-green-700 hover:bg-green-100/50"
          }`}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </div>
  )
}
