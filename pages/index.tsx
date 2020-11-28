import Head from 'next/head';
import styles from '../styles/Home.module.css';

import AddTodo from 'components/graphql/AddTodo';
import App from 'components/context/App';
import ExchangeRates from 'components/graphql/ExchangeRates';

export default function Home() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
      {/* <AddTodo /> */}

      {/* Context */}
      {/* <App /> */}
    </div>
  );
}
