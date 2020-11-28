import React from 'react';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates: React.FC = ({}) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Link href="/cache">
        <a>cacheページ</a>
      </Link>
      <h2>↓fetchされたデータ</h2>
      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExchangeRates;
