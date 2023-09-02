import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { bulildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()
  const bookId = req.query.bookId as string

  const bookPrisma = await prisma.book.findMany({
    where: {
      id: bookId,
    },

    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
      },
    },
  })

  const booksRatings = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: bookId,
    },
    _avg: {
      rate: true,
    },
  })
  const book = {
    ...bookPrisma,
    avgRating: booksRatings[0]._avg.rate ?? 0,
  }

  return res.json({ book })
}
