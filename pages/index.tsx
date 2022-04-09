import Head from 'next/head';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { graphQLRequest } from 'utils/sdk';

import styles from '../styles/Home.module.css';

const QUERY_RESTAURANT = `
  query {
    restaurants {
      id
      name
    }
  }
`;

export default function Home() {
  const [page] = useState(1);

  const { data, isLoading, error } = useQuery(['restaurant', page], () =>
    graphQLRequest(QUERY_RESTAURANT)
  );

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          {data?.restaurants.map((restaurant: Record<string, string>) => (
            <div key={restaurant.id}>{restaurant.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
