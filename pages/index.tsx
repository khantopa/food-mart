import Head from 'next/head';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { graphQLRequest } from 'utils/sdk';

const QUERY_RESTAURANT = `
  query {
    restaurants {
      id
      name
      shortDescription
      description
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
    <div>
      <Head>
        <title>Restaurants</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Restaurants</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          {data?.restaurants.map((restaurant: Record<string, string>) => (
            <div key={restaurant.id}>
              {restaurant.name}, {restaurant.shortDescription},
              {restaurant.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
