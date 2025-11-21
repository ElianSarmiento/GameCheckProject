import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme === 'dark'
    }
    return window.matchMedia('(max-width: 640px)').matches
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <label className='fixed top-6 right-6 z-50 inline-flex cursor-pointer items-center'>
      <input
        className='peer sr-only'
        type='checkbox'
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className="h-10 w-20 rounded-full bg-linear-to-r from-yellow-300 to-orange-400 transition-all duration-500 peer-checked:from-blue-400 peer-checked:to-indigo-500 after:absolute after:top-1 after:left-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-white after:text-lg after:shadow-md after:transition-all after:duration-500 after:content-['☀️'] peer-checked:after:translate-x-10 peer-checked:after:content-['🌙']"></div>
      <span className='ml-3 text-sm font-medium text-white'>Theme</span>
    </label>
  )
}
