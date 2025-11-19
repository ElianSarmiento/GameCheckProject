'use client'
import Image from 'next/image'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={clsx(
        'bg-background/80 text-foreground fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-6 text-sm shadow-[0_10px_45px_-25px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-300',
        isScrolled ? 'py-3 shadow-[0_10px_35px_-30px_rgba(0,0,0,0.8)]' : 'py-5'
      )}
    >
      {/* nav content */}
      <div className='container flex items-center justify-between'>
        <a
          href='#hero'
          className='text-primary flex items-center gap-3 text-xl font-bold'
        >
          <Image
            src='/logo.png'
            alt='GameCheck logo'
            width={65}
            height={65}
            className='bg-surface/70 rounded-2xl border border-white/10 p-1'
          />
          <span className='text-foreground'>GameCheck</span>
        </a>
      </div>
    </nav>
  )
}
