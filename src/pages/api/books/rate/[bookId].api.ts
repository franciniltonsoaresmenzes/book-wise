import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { bulildNextAuthOptions } from '../../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const bookId = String(req.query.bookId)
  console.log(bookId)

  const session = await getServerSession(
    req,
    res,
    bulildNextAuthOptions(req, res),
  )

  if (!session) return res.status(405).end()

  const user = session.user

  const bodySchemaRating = z.object({
    description: z.string().min(1).max(450),
    rate: z.coerce.number().min(1).max(5),
  })

  try {
    const { description, rate } = bodySchemaRating.parse(req.body)

    const bookAlReadted = await prisma.rating.findFirst({
      where: {
        user_id: user.id,
        book_id: bookId,
      },
    })

    if (bookAlReadted)
      return res.status(401).json({ error: 'Livro já foi avaliado' })

    await prisma.rating.create({
      data: {
        rate,
        description,
        user_id: user.id,
        book_id: bookId,
      },
    })

    return res.status(201).end()
  } catch (err) {
    console.log(err)
    return res.status(405).end()
  }
}
