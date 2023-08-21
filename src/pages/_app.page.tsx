import { globalStyles } from '@/styles/global'
import { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

globalStyles()

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '700'] })

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <DefaultSeo
        title="Book Wise"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.book-wise.rocketseat.com.br',
          siteName: 'Book Wise',
        }}
      />
      <main className={nunito.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  )
}
