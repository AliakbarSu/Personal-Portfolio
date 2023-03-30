import ThemeProvider from 'ui/providers/ThemeProvider';
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app'
import '../styles/fonts.css';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});


const authLink = setContext((_, { headers }) => {
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
  uri: "https://eu-central-1.cdn.hygraph.com/content/ckqq0ighkcsda01xoc1j0dva5/master",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}><ThemeProvider><Component {...pageProps} /></ThemeProvider> </ApolloProvider>
}
