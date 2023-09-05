import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { X } from '@phosphor-icons/react'
import { Close, Content, EvaluationHeader, Overlay, Section } from './styles'
import { BookDetail } from '../BookDetail'
import { Text } from '../UI/Typography'
import { Comments } from '../Comments'
import { useSession } from 'next-auth/react'
import { Link } from '../UI/Link'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Category, Rating, User } from '@prisma/client'
import { TextArea } from '../TextArea'
import { Evaluate } from '../Evaluate'

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
            {!user && (
              <Link as="button">
                <Text as="span">Avaliar</Text>
              </Link>
            )}
          </EvaluationHeader>

          <Section>
            <Evaluate />
            {!isFetching &&
              comments.map((comment) => (
                <Comments key={comment.id} data={comment} />
              ))}
          </Section>
        </Content>
        <Overlay />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
