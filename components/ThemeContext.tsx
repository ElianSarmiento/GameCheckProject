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
  // Initialize state - check localStorage or use default based on screen size
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme === 'dark'
    }
    return window.matchMedia('(max-width: 640px)').matches
  })

  // Apply theme changes to the document and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

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
