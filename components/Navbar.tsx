'use client'
import Image from 'next/image'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

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
        'fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-6 text-sm backdrop-blur-xl transition-all duration-300',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      {/* nav content */}
      <div className='container flex items-center justify-between'>
        <a
          href='#hero'
          className='flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white'
        >
          <Image
            src='/logo.png'
            alt='GameCheck logo'
            width={65}
            height={65}
            className='rounded-2xl border border-white/10 p-1'
          />
          <span>GameCheck</span>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
