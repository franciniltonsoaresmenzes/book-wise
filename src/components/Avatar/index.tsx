import { AvatarContent, AvatarFallBack, AvatarImage } from './styles'

type Props = {
  image: string
}

export function Avatar({ image }: Props) {
  return (
    <AvatarContent>
      <AvatarImage src={image} alt="Imagen Usuarios" />
      <AvatarFallBack>I</AvatarFallBack>
    </AvatarContent>
  )
}
