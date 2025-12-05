'use client'
import { Navbar } from '@/components/Navbar'
import { ThemeToggle } from '@/components/ThemeToggle'
import DarkVeil from '@/components/DarkVeil'
import LightMode from '@/components/LightMode'
import { useTheme } from '@/components/ThemeContext'
import { GameSearch } from '@/components/GameSearch'
import { GameCard } from '@/components/GameCard'
import { GameGrid } from '@/components/GameGrid'
import { mockGames } from '@/data/mockGames'

export default function Home() {
  const { isDarkMode } = useTheme()
  return (
    <div className='relative min-h-screen'>
      {/* Animated background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
        {isDarkMode ? <DarkVeil /> : <LightMode />}
      </div>

      <Navbar />

      <main className='relative z-10 flex min-h-screen items-start justify-center px-4 pt-45'>
        <GameSearch />
        <GameGrid games={mockGames} />
        {/* <GameResultsGrid /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
