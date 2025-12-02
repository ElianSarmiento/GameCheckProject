'use client'
import { useState } from 'react'

// TODO: Convert the HTML search bar to React component
// Steps:
// 1. Import useState from 'react'
// 2. Create the component function
// 3. Add state to track search input
// 4. Convert the HTML to JSX (change class to className)
// 5. Make the input controlled (value and onChange)
// 6. Add dark mode classes (dark:)
// 7. Export the component

export const GameSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className='w-full max-w-2xl'>
      <div className='flex h-[46px] w-full items-center gap-2 overflow-hidden rounded-[5px] border border-gray-500/30 bg-white pr-3 transition duration-300 focus-within:border-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus-within:border-blue-400'>
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          type='text'
          placeholder='Search for games on the market'
          className='h-full w-full bg-transparent pl-4 text-sm text-gray-900 placeholder-gray-500 outline-none dark:text-white dark:placeholder-gray-400'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='22'
          height='22'
          viewBox='0 0 30 30'
          className='fill-gray-600 dark:fill-gray-400'
        >
          <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z'></path>
        </svg>
      </div>
    </div>
  )
}
