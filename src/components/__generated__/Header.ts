import * as Types from '../../__generated__/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLanguageListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLanguageListQuery = { __typename?: 'Query', me?: { __typename?: 'User', languages?: Array<{ __typename?: 'Language', shortName: string }> | null } | null, languagesList: Array<{ __typename?: 'LanguageListItem', shortName: string, flagUrl: string, name: string }> };


export const GetLanguageListDocument = gql`
    query GetLanguageList {
  me {
    languages {
      shortName
    }
  }
  languagesList {
    shortName
    flagUrl
    name
  }
}
    `;

/**
 * __useGetLanguageListQuery__
 *
 * To run a query within a React component, call `useGetLanguageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLanguageListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLanguageListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLanguageListQuery(baseOptions?: Apollo.QueryHookOptions<GetLanguageListQuery, GetLanguageListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLanguageListQuery, GetLanguageListQueryVariables>(GetLanguageListDocument, options);
      }
export function useGetLanguageListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLanguageListQuery, GetLanguageListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLanguageListQuery, GetLanguageListQueryVariables>(GetLanguageListDocument, options);
        }
export type GetLanguageListQueryHookResult = ReturnType<typeof useGetLanguageListQuery>;
export type GetLanguageListLazyQueryHookResult = ReturnType<typeof useGetLanguageListLazyQuery>;
export type GetLanguageListQueryResult = Apollo.QueryResult<GetLanguageListQuery, GetLanguageListQueryVariables>;