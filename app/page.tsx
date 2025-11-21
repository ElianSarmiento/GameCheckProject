import { Navbar } from '@/components/Navbar'
import DarkVeil from '@/components/DarkVeil'

export default function Home() {
  return (
    <div className='relative min-h-screen text-white'>
      {/* Animated background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
        <DarkVeil key={Date.now()} />
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
