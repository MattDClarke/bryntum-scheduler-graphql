import "@/styles/App.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import apolloClient from "@/utils/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
