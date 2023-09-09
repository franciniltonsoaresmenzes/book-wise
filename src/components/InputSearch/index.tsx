import { CSS } from '@stitches/react'
import { InputHTMLAttributes, ReactNode } from 'react'
import { ContentInput } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
  css?: CSS
}

export const InputSearch = ({ css, icon, ...props }: Props) => {
  return (
    <ContentInput css={css}>
      <input {...props} />
      {icon}
    </ContentInput>
  )
}
