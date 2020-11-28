import React from 'react';
import Link from 'next/link';
import { gql, useApolloClient } from '@apollo/client';
import { EXCHANGE_RATES } from 'components/graphql/ExchangeRates';

interface cacheProps {}

const cache: React.FC<cacheProps> = ({}) => {
  const client = useApolloClient();
  // const data = client.readQuery({ query: EXCHANGE_RATES });

  client.writeQuery({
    query: EXCHANGE_RATES,
    data: {
      rates: [
        // ...data.rates,
        {
          __typename: 'ExchangeRate',
          currency: '追加されたデータ',
          rate: '00000000000000',
        },
      ],
    },
  });
  const hoge = client.readQuery({ query: EXCHANGE_RATES });
  console.log(hoge);
  return (
    <>
      <h1>cacheページだよ</h1>
      <h1 onClick={() => console.log(data)}>cacheを変更する</h1>
      <Link href="/">
        <a>Homeに戻る</a>
      </Link>
    </>
  );
};
export default cache;
