// /lib/apollo.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";

const batchHttpLink = new BatchHttpLink({
  uri: "/api/graphql",
  // batchMax: 10, // default = 10
  // batchInterval: 50, // default = 10
  // batchDebounce: true, // deault = false
});

const apolloClient = new ApolloClient({
  link: batchHttpLink,
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
