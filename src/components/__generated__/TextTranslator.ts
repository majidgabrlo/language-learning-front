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