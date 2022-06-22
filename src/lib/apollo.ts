import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pm8xtt204p01z48664gqyw/master',
  cache: new InMemoryCache()
})