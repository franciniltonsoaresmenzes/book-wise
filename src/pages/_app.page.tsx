import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import '../lib/dayjs'
import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
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

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
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
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </SkeletonTheme>
      </main>
    </QueryClientProvider>
  )
}
