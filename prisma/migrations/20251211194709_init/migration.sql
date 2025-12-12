-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "currentPrice" DOUBLE PRECISION NOT NULL,
    "originalPrice" DOUBLE PRECISION,
    "discount" INTEGER,
    "platforms" TEXT[],
    "releaseDate" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "stores" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
