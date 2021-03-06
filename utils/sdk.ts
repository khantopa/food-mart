import axios from 'axios';

export const graphQLRequest = async (
  query: string,
  variables?: Record<string, unknown>
) => {
  try {
    const { data } = await axios.post('/api/graphql', {
      query,
      variables: {
        params: variables,
      },
    });

    return data.data;
  } catch (error) {
    console.log('Failed to fetch the data');
  }
};
