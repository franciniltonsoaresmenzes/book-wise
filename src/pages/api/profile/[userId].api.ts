import { prisma } from '@/lib/prisma'
import { getMostFrequentString } from '@/util/getMostFrequentString'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()
  const userId = req.query.userId as string

  const books = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  const countPagesRead = books.reduce(
    (acc, page) => page.book.total_pages + acc,
    0,
  )

  const ratingsLenght = books.length

  const countAuthorRead = books.reduce((acc, book) => {
    if (!acc.includes(book.book.author)) {
      acc.push(book.book.author)
    }

    return acc
  }, [] as string[])

  const categorys = books.flatMap((book) =>
    book.book.categories.flatMap((category) => category.category.name),
  )

  const metrics = {
    countPagesRead,
    ratingsLenght,
    countAuthor: countAuthorRead.length,
    bestCategory: getMostFrequentString(categorys),
    user,
  }

  return res.json({ books, metrics })
}
