import React from 'react';
import Link from 'next/link';
import { gql, useApolloClient } from '@apollo/client';
import { EXCHANGE_RATES } from 'components/graphql/ExchangeRates';

interface cacheProps {}

const cache: React.FC<cacheProps> = ({}) => {
  const client = useApolloClient();
  const { rates } = client.readQuery({ query: EXCHANGE_RATES });

  console.log(rates);
  return (
    <>
      <h1>cacheページだよ</h1>
      <Link href="/">
        <a>Homeに戻る</a>
      </Link>
    </>
  );
};
export default cache;
