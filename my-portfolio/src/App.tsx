import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '@components/Header'
import Menu from '@/components/Menu'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")
  return (
    <>
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-background-dark via-black to-background-dark"
            : "bg-gradient-to-br from-background via-white to-background"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Top Section - Menu Options and Edgar Character side by side */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Menu Options */}
              <div className="space-y-6">
                <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
                <Menu isDarkMode={isDarkMode} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
