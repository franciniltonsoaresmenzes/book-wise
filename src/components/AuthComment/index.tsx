import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ButtonsAuth } from '../ButtonsAuth'
import { Title } from '../UI/Typography'
import { BoxContainer, Close, Content, Overlay } from './sytles'

export function AuthComment() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <BoxContainer>
          <Close>
            <X size={24} />
          </Close>
          <Title size="xs">Faça login para deixar sua avaliação</Title>
          <ButtonsAuth />
        </BoxContainer>
      </Content>
    </Dialog.Portal>
  )
}
