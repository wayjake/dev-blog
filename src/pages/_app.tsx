//@ts-nocheck

import type { AppProps } from 'next/app'
import ThemeProvider from 'styled-components'; 
import Head from 'next/head';
import GlobalStyle  from '../global-styles/global'
import { MainLayout } from '../components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <GlobalStyle/>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
