import { request } from 'graphql-request';
import { useQuery, UseQueryOptions } from 'react-query';

interface Props<T> {
    key: string | string[];
    query: string;
    variables?: Record<string, any>;
    options: UseQueryOptions<T>;
}

export function useGQLQuery<T>({
    key,
    query,
    variables,
    options = {},
}: Props<T>) {
    const endpoint = '/api/graphql';

    const fetchData = async () => request(endpoint, query, variables);

    return useQuery<T>(key, fetchData, options);
}
