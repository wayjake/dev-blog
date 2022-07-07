import type { AppProps } from 'next/app'
import ThemeProvider from 'styled-components'; 
import Head from 'next/head';
import GlobalStyle  from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div>
        <GlobalStyle/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
