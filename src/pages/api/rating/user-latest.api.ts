import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { bulildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(401).end()

  const session = await getServerSession(
    req,
    res,
    bulildNextAuthOptions(req, res),
  )

  if (!session) return res.status(401).end()

  const UserLatest = await prisma.rating.findMany({
    where: {
      user_id: session.user.id,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
    take: 4,
  })

  return res.status(201).json({ rating: UserLatest })
}
