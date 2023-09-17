import { api } from '@/lib/axios'
import { X } from '@phosphor-icons/react'
import { Category, Rating, User } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { BookDetail } from '../BookDetail'
import { Comments } from '../Comments'
import { Evaluate } from '../Evaluate'
import { Link } from '../UI/Link'
import { Text } from '../UI/Typography'
import { Close, Content, EvaluationHeader, Overlay, Section } from './styles'
import { AuthComment } from '../AuthComment'

type Props = {
  children: ReactNode
  bookId: string
}

type CategoryProps = {
  category: Category
}

export type RatingProps = Rating & {
  user: User
}

export type BookProps = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  categories: CategoryProps[]
  ratings: RatingProps[]
  avgRating: number
}

type ResposneProps = {
  book: BookProps
}

export function BookDialog({ children, bookId }: Props) {
  const [openSideBar, SetOpenSideBar] = useState<boolean>(false)
  const [openEvaluate, setOpenEvaluate] = useState<boolean>(false)

  const { data, isFetching } = useQuery({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const response = await api.get<ResposneProps>(`/books/${bookId}`)
      return response.data ?? {}
    },
    enabled: openSideBar,
  })

  const book = data?.book as BookProps
  const comments = data?.book.ratings ? data.book.ratings : []

  const { data: session } = useSession()
  const user = session?.user

  const router = useRouter()
  const paramsbookId = router.query.book

  useEffect(() => {
    if (paramsbookId === bookId) {
      SetOpenSideBar(true)
    }
  }, [paramsbookId, bookId])

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explorar?book=${bookId}`, undefined, { shallow: true })
    } else {
      router.push('/explorar', undefined, { shallow: true })
    }

    SetOpenSideBar(open)
  }

  const isCommented = data?.book.ratings.find(
    (comment) => comment.user_id === user?.id,
  )

  return (
    <Dialog.Root open={openSideBar} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Content>
          <Close>
            <X size={24} />
          </Close>
          {!isFetching && <BookDetail data={book} />}
          {isFetching && 'Carregando...'}

          <EvaluationHeader>
            <Text size="sm">Avaliações</Text>
            {user && !isCommented && (
              <Link as="button" onClick={() => setOpenEvaluate(true)}>
                <Text as="span">Avaliar</Text>
              </Link>
            )}

            {!user && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Link as="button">
                    <Text as="span">Avaliar</Text>
                  </Link>
                </Dialog.Trigger>
                <AuthComment />
              </Dialog.Root>
            )}
          </EvaluationHeader>

          <Section>
            {openEvaluate && (
              <Evaluate
                onClose={() => setOpenEvaluate(false)}
                bookId={bookId}
              />
            )}

            {!isFetching &&
              comments.map((comment) => (
                <Comments
                  key={comment.id}
                  data={comment}
                  active={user?.id === comment.user.id}
                />
              ))}
          </Section>
        </Content>
        <Overlay />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
