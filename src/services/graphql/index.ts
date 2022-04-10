import { useQuery } from 'react-query';
import { DocumentNode } from 'graphql';
import { graphQLRequest } from 'src/utils/sdk';

type UseGQLQuery<T = Record<string, unknown>> = {
  queryKey: unknown[];
  query: DocumentNode | string;
  variables?: T;
  options?: Record<string, string>;
};

const useGQLQuery = ({ queryKey, query, variables, options }: UseGQLQuery) => {
  return useQuery(queryKey, () => graphQLRequest(query, variables), options);
};

export { useGQLQuery };
