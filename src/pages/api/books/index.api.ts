import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const books = await prisma.categoriesOnBooks.findMany({
    include: {
      book: true,
      category: true,
    },
  })

  return res.json({ books })
}
