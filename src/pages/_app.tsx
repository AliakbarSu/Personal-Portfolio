import ThemeProvider from '@/providers/ThemeProvider';
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app'
import './fonts.css';

export const client = new ApolloClient({
  uri: 'https://eu-central-1.cdn.hygraph.com/content/ckqq0ighkcsda01xoc1j0dva5/master',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}><ThemeProvider><Component {...pageProps} /></ThemeProvider> </ApolloProvider>
}
