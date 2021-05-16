import { GraphQLClient } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { useMutation, useQueryClient } from 'react-query';

interface MutationProps {
    query: RequestDocument;
    variables: any;
}

export function useGQLMutation({ key }: { key: string }) {
    const queryClient = useQueryClient();
    const endpoint = '/api/graphql';

    const graphQLClient = new GraphQLClient(endpoint);

    return useMutation({
        mutationKey: key,
        mutationFn: ({ query, variables }: MutationProps) =>
            graphQLClient.request(query, variables),
        onSettled: () => queryClient.invalidateQueries('todos'),
    });
}
