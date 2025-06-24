import { useState } from 'react'
import Header from '@components/Header'
import Content from '@components/Content'
import Menu from '@/components/Menu'
import Avatar from '@/components/Avatar'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")
  return (
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-background-dark via-black to-background-dark"
            : "bg-gradient-to-br from-background via-white to-background"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Top Section - Menu Options and Character side by side */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Menu Options */}
              <div className="space-y-6">
                <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
                <Menu isDarkMode={isDarkMode} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
              </div>
              {/* Right side - character*/}
              <div>
                <Avatar isDarkMode={isDarkMode} currentSection={currentSection}/>
              </div>
            </div>
            {/* Bottom Section - More info */}
            <div>
              <Content isDarkMode={isDarkMode} currentSection={currentSection} />
            </div>
          </div>
        </div>
        <Analytics />
      </div>
  )
}

export default App
