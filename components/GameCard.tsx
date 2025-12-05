'use client'

import { Game } from '@/data/mockGames'

export const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800'>
      <div className='relative'>
        <img
          src={game.coverImage}
          alt={game.title}
          className='h-64 w-full bg-gray-100 object-contain dark:bg-gray-900'
        />
        {/* If there's a discount, show a badge */}
        {game.discount && (
          <div className='absolute top-2 right-2 rounded-md bg-red-500 px-2 py-1 text-sm font-bold text-white'>
            -{game.discount}%
          </div>
        )}
      </div>
      <div className='p-4'>
        {/* Title */}
        <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
          {game.title}
        </h3>
        {/* Price section */}
        <div className='mb-3 flex items-center gap-2'>
          <span className='text-xl font-bold text-green-600 dark:text-green-400'>
            ${game.currentPrice}
          </span>
          {game.originalPrice && (
            <span className='text-sm text-gray-500 line-through dark:text-gray-400'>
              ${game.originalPrice}
            </span>
          )}
        </div>
        {/* Platforms */}
        <div className='mb-3 flex flex-wrap gap-2'>
          {game.platforms.map(platform => (
            <span
              key={platform}
              className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            >
              {platform}
            </span>
          ))}
        </div>
        {/* Rating */}
        {game.rating && (
          <div className='flex items-center gap-1 text-yellow-500'>
            ⭐
            <span className='text-sm text-gray-600 dark:text-gray-400'>
              {game.rating}/5
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
