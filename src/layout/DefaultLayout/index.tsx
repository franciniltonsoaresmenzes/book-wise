import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  return <>{children}</>
}
