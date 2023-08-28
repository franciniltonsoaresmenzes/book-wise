import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, EvaluationHeader, Overlay, Section } from './styles'
import { BookDetail } from '../BookDetail'
import { Text } from '../UI/Typography'
import { Comments } from '../Comments'
import { useSession } from 'next-auth/react'
import { Link } from '../UI/Link'

export function SidePanel() {
  const { data } = useSession()
  const user = data?.user

  return (
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
  )
}
