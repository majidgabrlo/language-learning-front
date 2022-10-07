import { gql } from "@apollo/client";
import { notification, Popconfirm } from "antd";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import translator from "../utils/translator";
import { useAddWordMutation, useSavedWordsQuery } from "./__generated__/TextTranslator";
import classNames from 'classnames';

type TextTranslatorProps = {
  summary: string;
};
const TextTranslator: FC<TextTranslatorProps> = ({ summary }) => {
  const [addWord] = useAddWordMutation();
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const [translated, setTranslated] = useState("");

  const { data: savedWords, refetch: refetchSavedWords } = useSavedWordsQuery({ variables: { languageShortName: selectedLanguage, text: summary } })

  const summaryAsArray = summary.split(" ");

  const wordTrimer = (word: string) => {
    return word.replaceAll(/[,.:]/g, "")
  }

  const translationHandler = async (word: string) => {
    setTranslated("");
    const data = await translator(word, selectedLanguage);
    setTranslated(data);
  };

  const addWordToDictionary = (word: string) => {
    const manipulatedWord = wordTrimer(word);
    addWord({
      variables: {
        languageShortName: selectedLanguage,
        word: manipulatedWord,
        meaning: translated,
      },
    }).then((res) => {
      notification["success"]({
        message: "Successful",
        description: `The word ${manipulatedWord} successfully added to dictionary`,
      });
    }).then(() => refetchSavedWords());
  };

  return (
    <>
      {summaryAsArray.map((word) => (
        <Popconfirm
          title={!!translated ? <div>{translated}</div> : <div>Loading...</div>}
          icon={null}
          okText="Add to dictionary"
          onConfirm={() => {
            addWordToDictionary(word);
          }}
          okButtonProps={{ hidden: savedWords?.savedWordsInText?.includes(wordTrimer(word)) }}
        >
          <span
            className={classNames("transition font-serif py-0.5 px-[1px] rounded hover:bg-indigo-300", {
              "bg-amber-300": savedWords?.savedWordsInText?.includes(wordTrimer(word))
            })}
            onClick={() => translationHandler(word)}
            role="text"
          >
            {word}
          </span>
          <span> </span>
        </Popconfirm>
      ))}
    </>
  );
};

gql`
  mutation AddWord(
    $languageShortName: String!
    $meaning: String
    $word: String
  ) {
    addWord(
      languageShortName: $languageShortName
      meaning: $meaning
      word: $word
    )
  }
`;

gql`
  query SavedWords($languageShortName: String!, $text: String!){
    savedWordsInText(languageShortName: $languageShortName, text: $text)
  }
`

export default TextTranslator;
