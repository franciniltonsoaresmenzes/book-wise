import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'

export const AvatarContent = styled(Avatar.Root, {
  width: 31,
  height: 31,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$full',
  overflow: 'hidden',

  border: '1px solid $colors$green100',
})

export const AvatarImage = styled(Avatar.Image, {
  width: 32,
  height: 32,
})

export const AvatarFallBack = styled(Avatar.Fallback, {})
