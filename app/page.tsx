'use client'
import { Navbar } from '@/components/Navbar'
import { ThemeToggle } from '@/components/ThemeToggle'
import DarkVeil from '@/components/DarkVeil'
import LightMode from '@/components/LightMode'
import { useTheme } from '@/components/ThemeContext'

export default function Home() {
  const { isDarkMode } = useTheme()
  return (
    <div className='relative min-h-screen text-white'>
      {/* Animated background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
        {isDarkMode ? <DarkVeil /> : <LightMode />}
      </div>

      <Navbar />

      <main className='mx-auto max-w-6xl px-4 pt-32 pb-10'>
        {/* <GameSearchSection />
        <GameResultsGrid /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
