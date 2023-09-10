import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'

export const AvatarContent = styled(Avatar.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$full',
  overflow: 'hidden',

  border: '1px solid $colors$green100',

  variants: {
    size: {
      xs: {
        width: 72,
        height: 72,
      },
      sm: {
        width: 31,
        height: 31,
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const AvatarFallBack = styled(Avatar.Fallback, {})
