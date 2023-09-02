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

type Props = {
  children: ReactNode
  bookId: string
}
export function BookDialog({ children, bookId }: Props) {
  const [openSideBar, SetOpenSideBar] = useState<boolean>(false)

  const { data } = useSession()
  const user = data?.user

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
          <BookDetail />

          <EvaluationHeader>
            <Text size="sm">Avaliações</Text>
            {!user && (
              <Link as="button">
                <Text as="span">Avaliar</Text>
              </Link>
            )}
          </EvaluationHeader>

          <Section>
            <Comments />
            <Comments />
            <Comments />
          </Section>
        </Content>
        <Overlay />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
