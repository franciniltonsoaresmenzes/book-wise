import { AvatarContent, AvatarFallBack, AvatarImage } from './styles'

type Props = {
  image: string
  variant?: 'xs' | 'sm'
}

export function Avatar({ variant = 'sm', image }: Props) {
  return (
    <AvatarContent size={variant}>
      <AvatarImage src={image} alt="Imagen Usuarios" />
      <AvatarFallBack>I</AvatarFallBack>
    </AvatarContent>
  )
}
