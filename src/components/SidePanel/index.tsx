import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'
import { BookDetail } from '../BookDetail'

export function SidePanel() {
  return (
    <Dialog.Portal>
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <BookDetail />
      </Content>
      <Overlay />
    </Dialog.Portal>
  )
}
