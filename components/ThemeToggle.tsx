import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const applyTheme = (theme: string) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
      localStorage.setItem('theme', theme)
    }
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      applyTheme(storedTheme)
      return
    }
    const preferDarkOnSmallScreens =
      window.matchMedia('(max-width: 640px)').matches
    applyTheme(preferDarkOnSmallScreens ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }
  return (
    <label className='fixed right-6 top-6 z-50 inline-flex cursor-pointer items-center'>
      <input
        className='peer sr-only'
        type='checkbox'
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className="after:content-['☀️'] peer-checked:after:content-['🌙'] h-10 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-500 after:absolute after:left-1 after:top-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-white after:text-lg after:shadow-md after:transition-all after:duration-500 peer-checked:from-blue-400 peer-checked:to-indigo-500 peer-checked:after:translate-x-10"></div>
      <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-100'>
        Theme
      </span>
    </label>
  )
}
