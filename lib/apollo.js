// Add Apollo Client to this file

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphql } from "graphql";

// uri defines the Wordpress application URL
// cache: new InMemoryCache() allows the client to cache the request in the application's memory

export const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    cache: new InMemoryCache(), 
})