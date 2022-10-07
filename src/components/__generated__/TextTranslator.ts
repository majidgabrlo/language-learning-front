import * as Types from '../../__generated__/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddWordMutationVariables = Types.Exact<{
  languageShortName: Types.Scalars['String'];
  meaning?: Types.InputMaybe<Types.Scalars['String']>;
  word?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type AddWordMutation = { __typename?: 'Mutation', addWord: string };

export type SavedWordsQueryVariables = Types.Exact<{
  languageShortName: Types.Scalars['String'];
  text: Types.Scalars['String'];
}>;


export type SavedWordsQuery = { __typename?: 'Query', savedWordsInText?: Array<string> | null };


export const AddWordDocument = gql`
    mutation AddWord($languageShortName: String!, $meaning: String, $word: String) {
  addWord(languageShortName: $languageShortName, meaning: $meaning, word: $word)
}
    `;
export type AddWordMutationFn = Apollo.MutationFunction<AddWordMutation, AddWordMutationVariables>;

/**
 * __useAddWordMutation__
 *
 * To run a mutation, you first call `useAddWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWordMutation, { data, loading, error }] = useAddWordMutation({
 *   variables: {
 *      languageShortName: // value for 'languageShortName'
 *      meaning: // value for 'meaning'
 *      word: // value for 'word'
 *   },
 * });
 */
export function useAddWordMutation(baseOptions?: Apollo.MutationHookOptions<AddWordMutation, AddWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWordMutation, AddWordMutationVariables>(AddWordDocument, options);
      }
export type AddWordMutationHookResult = ReturnType<typeof useAddWordMutation>;
export type AddWordMutationResult = Apollo.MutationResult<AddWordMutation>;
export type AddWordMutationOptions = Apollo.BaseMutationOptions<AddWordMutation, AddWordMutationVariables>;
export const SavedWordsDocument = gql`
    query SavedWords($languageShortName: String!, $text: String!) {
  savedWordsInText(languageShortName: $languageShortName, text: $text)
}
    `;

/**
 * __useSavedWordsQuery__
 *
 * To run a query within a React component, call `useSavedWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSavedWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSavedWordsQuery({
 *   variables: {
 *      languageShortName: // value for 'languageShortName'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSavedWordsQuery(baseOptions: Apollo.QueryHookOptions<SavedWordsQuery, SavedWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SavedWordsQuery, SavedWordsQueryVariables>(SavedWordsDocument, options);
      }
export function useSavedWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SavedWordsQuery, SavedWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SavedWordsQuery, SavedWordsQueryVariables>(SavedWordsDocument, options);
        }
export type SavedWordsQueryHookResult = ReturnType<typeof useSavedWordsQuery>;
export type SavedWordsLazyQueryHookResult = ReturnType<typeof useSavedWordsLazyQuery>;
export type SavedWordsQueryResult = Apollo.QueryResult<SavedWordsQuery, SavedWordsQueryVariables>;