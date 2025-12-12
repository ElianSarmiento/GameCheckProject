import { PrismaClient } from '@prisma/client'
import { mockGames } from '../data/mockGames'
import 'dotenv/config'

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
})

async function main() {
  console.log('Start seeding...')

  for (const game of mockGames) {
    await prisma.game.create({
      data: {
        title: game.title,
        coverImage: game.coverImage,
        currentPrice: game.currentPrice,
        originalPrice: game.originalPrice,
        discount: game.discount,
        platforms: game.platforms,
        releaseDate: game.releaseDate,
        rating: game.rating,
        stores: game.stores
      }
    })
    console.log(`Created game: ${game.title}`)
  }

  console.log('Seeding finished.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
