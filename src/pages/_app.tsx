import ThemeProvider from '@/providers/ThemeProvider';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import './fonts.css';

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider><Component {...pageProps} /></ThemeProvider> 
}
