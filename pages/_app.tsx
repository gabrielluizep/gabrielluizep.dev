import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import ptBR from '../lang/pt-BR.json'
import en from '../lang/en.json'

const messages = {
  'pt-BR': ptBR,
  en,
}

import '/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter()

  return (
    <>
      <Head>
        <title>gabrielluizep.dev</title>
      </Head>

      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  )
}

export default MyApp
