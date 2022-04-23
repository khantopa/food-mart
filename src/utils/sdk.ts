import axios from 'axios';
import { DocumentNode } from 'graphql';

export const graphQLRequest = async <T = Record<string, unknown>>(
  query: DocumentNode | string,
  variables?: T
): Promise<any> => {
  try {
    const { data } = await axios.post('/api/graphql', {
      query,
      variables: {
        params: variables,
      },
    });

    return data.data;
  } catch (error) {
    console.log(error, 'Failed');
    return Promise.reject(error);
  }
};
