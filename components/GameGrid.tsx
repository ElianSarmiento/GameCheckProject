import { GameCard } from './GameCard'
import { Game } from '@/data/mockGames'

export const GameGrid = ({ games }: { games: Game[] }) => {
  return (
    <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}
