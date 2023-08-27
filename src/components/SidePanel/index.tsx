import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { Box } from '../UI/Box'
import { Close, Content, Overlay } from './styles'

export function SidePanel() {
  return (
    <Dialog.Portal>
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <Box></Box>
      </Content>
      <Overlay />
    </Dialog.Portal>
  )
}
