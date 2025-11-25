'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

// 1. Define the shape of our context - what data will be shared
type ThemeContextType = {
  isDarkMode: boolean
  toggleTheme: () => void
}

// 2. Create the context with undefined as initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 3. Create the Provider component - this wraps your app and provides the theme state
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize state - always start with false to match server render
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // After mount, check localStorage and set the actual theme
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark')
    } else {
      const preferDark = window.matchMedia('(max-width: 640px)').matches
      setIsDarkMode(preferDark)
    }
  }, [])

  // Apply theme changes to the document and localStorage
  useEffect(() => {
    if (!mounted) return
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode, mounted])

  // Function to toggle between themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Provide the state and function to all children components
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 4. Custom hook to use the theme context - makes it easy to access in components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
