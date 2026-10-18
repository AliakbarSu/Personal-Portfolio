import ThemeProvider from 'ui/providers/ThemeProvider';
import '@/styles/globals.css'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import type { AppProps } from 'next/app'
import '../styles/fonts.css';
import { SetContextLink } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});


const authLink = new SetContextLink(({ headers }) => {
  const token = process.env.PORTFOLIO_GITHUB_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const gitHubClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://eu-central-1.cdn.hygraph.com/content/ckqq0ighkcsda01xoc1j0dva5/master" }),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}><ThemeProvider><Component {...pageProps} /></ThemeProvider> </ApolloProvider>
}
