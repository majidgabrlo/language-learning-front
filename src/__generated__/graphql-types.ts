export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  userErrors: Array<UserError>;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  words: Array<Word>;
};

export type LanguageListItem = {
  __typename?: 'LanguageListItem';
  flagUrl: Scalars['String'];
  name: Scalars['String'];
  shortName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLanguage: Scalars['String'];
  addWord: Scalars['String'];
  removeLanguage: Scalars['String'];
  removeWord: Scalars['String'];
  signin: AuthPayload;
  signup: AuthPayload;
};


export type MutationAddLanguageArgs = {
  languageShortName: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddWordArgs = {
  languageShortName: Scalars['String'];
  meaning?: InputMaybe<Scalars['String']>;
  word?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveLanguageArgs = {
  languageShortName: Scalars['String'];
};


export type MutationRemoveWordArgs = {
  languageShortName: Scalars['String'];
  word?: InputMaybe<Scalars['String']>;
};


export type MutationSigninArgs = {
  credentials: CredentialsInput;
};


export type MutationSignupArgs = {
  credentials: CredentialsInput;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  languageList: Array<Language>;
  languagesList: Array<LanguageListItem>;
  me?: Maybe<User>;
  savedWordsInText?: Maybe<Array<Scalars['String']>>;
  wordsList: Array<Word>;
};


export type QuerySavedWordsInTextArgs = {
  languageShortName: Scalars['String'];
  text: Scalars['String'];
};


export type QueryWordsListArgs = {
  languageShortName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  languages?: Maybe<Array<Language>>;
  name: Scalars['String'];
};

export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String'];
};

export type Word = {
  __typename?: 'Word';
  id: Scalars['ID'];
  meaning: Scalars['String'];
  word: Scalars['String'];
};
