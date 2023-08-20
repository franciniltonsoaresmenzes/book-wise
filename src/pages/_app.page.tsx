import { globalStyles } from '@/styles/global'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

globalStyles()

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.book-wise.rocketseat.com.br',
          siteName: 'Book Wise',
        }}
      />
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
