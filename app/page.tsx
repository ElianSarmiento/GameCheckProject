import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className='bg-background text-foreground min-h-screen'>
      <Navbar />

      <main className='mx-auto max-w-6xl px-4 pb-10 pt-32'>
        {/* <GameSearchSection />
        <GameResultsGrid /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
