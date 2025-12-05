export type Game = {
  id: string
  title: string
  coverImage: string
  currentPrice: number
  originalPrice?: number
  discount?: number // % discount
  platforms: string[]
  releaseDate: string
  rating?: number
  stores: {
    name: string
    price: number
    url: string
  }[]
}
export const mockGames: Game[] = [
  {
    id: '1',
    title: 'Elden Ring',
    coverImage:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp',
    currentPrice: 39.99,
    originalPrice: 59.99,
    discount: 33,
    platforms: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2022-02-25',
    rating: 4.8,
    stores: [
      {
        name: 'Steam',
        price: 39.99,
        url: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
      },
      { name: 'Epic Games', price: 44.99, url: 'https://www.epicgames.com' }
    ]
  },
  {
    id: '2',
    title: "Baldur's Gate 3",
    coverImage:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.webp',
    currentPrice: 59.99,
    platforms: ['PC', 'PS5'],
    releaseDate: '2023-08-03',
    rating: 4.9,
    stores: [
      {
        name: 'Steam',
        price: 59.99,
        url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'
      },
      { name: 'GOG', price: 59.99, url: 'https://www.gog.com' }
    ]
  },
  {
    id: '3',
    title: 'Cyberpunk 2077',
    coverImage:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/coaih8.webp',
    currentPrice: 29.99,
    originalPrice: 59.99,
    discount: 50,
    platforms: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2020-12-10',
    rating: 4.2,
    stores: [
      { name: 'Steam', price: 29.99, url: 'https://store.steampowered.com' },
      { name: 'Epic Games', price: 29.99, url: 'https://www.epicgames.com' },
      { name: 'GOG', price: 29.99, url: 'https://www.gog.com' }
    ]
  },
  {
    id: '4',
    title: 'Hades',
    coverImage:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.webp',
    currentPrice: 24.99,
    platforms: ['PC', 'PS5', 'Xbox', 'Switch'],
    releaseDate: '2020-09-17',
    rating: 4.7,
    stores: [
      { name: 'Steam', price: 24.99, url: 'https://store.steampowered.com' },
      { name: 'Epic Games', price: 24.99, url: 'https://www.epicgames.com' }
    ]
  },
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    coverImage:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp',
    currentPrice: 39.99,
    originalPrice: 59.99,
    discount: 33,
    platforms: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2018-10-26',
    rating: 4.6,
    stores: [
      { name: 'Steam', price: 39.99, url: 'https://store.steampowered.com' },
      { name: 'Epic Games', price: 39.99, url: 'https://www.epicgames.com' }
    ]
  },
  {
    id: '6',
    title: 'The Witcher 3: Wild Hunt',
    coverImage:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/coaarl.webp',
    currentPrice: 9.99,
    originalPrice: 39.99,
    discount: 75,
    platforms: ['PC', 'PS5', 'Xbox', 'Switch'],
    releaseDate: '2015-05-19',
    rating: 4.8,
    stores: [
      { name: 'Steam', price: 9.99, url: 'https://store.steampowered.com' },
      { name: 'GOG', price: 9.99, url: 'https://www.gog.com' }
    ]
  }
]
