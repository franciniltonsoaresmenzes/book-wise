import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { bulildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()
  const categoryId = req.query.category as string

  const booksPrisma = await prisma.book.findMany({
    where: {
      categories: {
        some: { categoryId },
      },
    },
    include: {
      ratings: true,
    },
  })

  const booksAvg = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
  })

  const session = await getServerSession(
    req,
    res,
    bulildNextAuthOptions(req, res),
  )

  let booksByUserId: string[] = []

  if (session) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: session.user.id,
          },
        },
      },
    })

    booksByUserId = userBooks.map((book) => book.id)
  }

  const books = booksPrisma.map((book) => {
    const bookWihRatings = booksAvg.find(
      (bookWihRating) => bookWihRating.book_id === book.id,
    )
    const { ratings, ...bookInfos } = book

    return {
      ...bookInfos,
      avgRating: bookWihRatings?._avg.rate,
      rating: ratings.length,
      alReady: booksByUserId.includes(book.id),
    }
  })

  return res.json({ books })
}
