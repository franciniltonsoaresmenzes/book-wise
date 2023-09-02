import { InputHTMLAttributes, ReactNode } from 'react'
import { ContentInput } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

export const InputSearch = ({ icon, ...props }: Props) => {
  return (
    <ContentInput>
      <input {...props} />
      {icon}
    </ContentInput>
  )
}
