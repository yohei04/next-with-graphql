import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import ExchangeRates from 'components/ExchangeRates';
import AddTodo from 'components/AddTodo';

const client = new ApolloClient({
  uri: 'https://sxewr.sse.codesandbox.io/',
  cache: new InMemoryCache(),
});

// client.query({
//   query: gql`
//     query GetRates {
//       rates(currency: "USD") {
//         currency
//       }
//     }
//   `,
// });

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        {/* <ExchangeRates /> */}
        <AddTodo />
      </div>
    </ApolloProvider>
  );
}
