import * as Types from '../../__generated__/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LanguagesListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LanguagesListQuery = { __typename?: 'Query', languagesList: Array<{ __typename?: 'LanguageListItem', flagUrl: string, name: string, shortName: string }> };

export type UsersLanguagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersLanguagesQuery = { __typename?: 'Query', languageList: Array<{ __typename?: 'Language', id: string, name: string, shortName: string }> };

export type AddLanguageMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  languageShortName: Types.Scalars['String'];
}>;


export type AddLanguageMutation = { __typename?: 'Mutation', addLanguage: string };


export const LanguagesListDocument = gql`
    query LanguagesList {
  languagesList {
    flagUrl
    name
    shortName
  }
}
    `;

/**
 * __useLanguagesListQuery__
 *
 * To run a query within a React component, call `useLanguagesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesListQuery(baseOptions?: Apollo.QueryHookOptions<LanguagesListQuery, LanguagesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguagesListQuery, LanguagesListQueryVariables>(LanguagesListDocument, options);
      }
export function useLanguagesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguagesListQuery, LanguagesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguagesListQuery, LanguagesListQueryVariables>(LanguagesListDocument, options);
        }
export type LanguagesListQueryHookResult = ReturnType<typeof useLanguagesListQuery>;
export type LanguagesListLazyQueryHookResult = ReturnType<typeof useLanguagesListLazyQuery>;
export type LanguagesListQueryResult = Apollo.QueryResult<LanguagesListQuery, LanguagesListQueryVariables>;
export const UsersLanguagesDocument = gql`
    query UsersLanguages {
  languageList {
    id
    name
    shortName
  }
}
    `;

/**
 * __useUsersLanguagesQuery__
 *
 * To run a query within a React component, call `useUsersLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<UsersLanguagesQuery, UsersLanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersLanguagesQuery, UsersLanguagesQueryVariables>(UsersLanguagesDocument, options);
      }
export function useUsersLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersLanguagesQuery, UsersLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersLanguagesQuery, UsersLanguagesQueryVariables>(UsersLanguagesDocument, options);
        }
export type UsersLanguagesQueryHookResult = ReturnType<typeof useUsersLanguagesQuery>;
export type UsersLanguagesLazyQueryHookResult = ReturnType<typeof useUsersLanguagesLazyQuery>;
export type UsersLanguagesQueryResult = Apollo.QueryResult<UsersLanguagesQuery, UsersLanguagesQueryVariables>;
export const AddLanguageDocument = gql`
    mutation AddLanguage($name: String!, $languageShortName: String!) {
  addLanguage(name: $name, languageShortName: $languageShortName)
}
    `;
export type AddLanguageMutationFn = Apollo.MutationFunction<AddLanguageMutation, AddLanguageMutationVariables>;

/**
 * __useAddLanguageMutation__
 *
 * To run a mutation, you first call `useAddLanguageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLanguageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLanguageMutation, { data, loading, error }] = useAddLanguageMutation({
 *   variables: {
 *      name: // value for 'name'
 *      languageShortName: // value for 'languageShortName'
 *   },
 * });
 */
export function useAddLanguageMutation(baseOptions?: Apollo.MutationHookOptions<AddLanguageMutation, AddLanguageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLanguageMutation, AddLanguageMutationVariables>(AddLanguageDocument, options);
      }
export type AddLanguageMutationHookResult = ReturnType<typeof useAddLanguageMutation>;
export type AddLanguageMutationResult = Apollo.MutationResult<AddLanguageMutation>;
export type AddLanguageMutationOptions = Apollo.BaseMutationOptions<AddLanguageMutation, AddLanguageMutationVariables>;