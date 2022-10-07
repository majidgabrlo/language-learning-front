import { gql } from "@apollo/client";
import { notification, Popconfirm } from "antd";
import { FC, useState } from "react";
import { useAppSelector } from "../store/hooks";
import translator from "../utils/translator";
import { useAddWordMutation } from "./__generated__/TextTranslator";

type TextTranslatorProps = {
  summary: string;
};
const TextTranslator: FC<TextTranslatorProps> = ({ summary }) => {
  const [addWord] = useAddWordMutation();
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const [translated, setTranslated] = useState("");
  const summaryAsArray = summary.split(" ");

  const translationHandler = async (word: string) => {
    setTranslated("");
    const data = await translator(word, selectedLanguage);
    setTranslated(data);
  };

  const addWordToDictionary = (word: string) => {
    addWord({
      variables: {
        languageShortName: selectedLanguage,
        word,
        meaning: translated,
      },
    }).then((res) => {
      notification["success"]({
        message: "Successful",
        description: `The word ${word} successfully added to dictionary`,
      });
    });
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
        >
          <span
            className="transition font-serif py-0.5 px-[1px] rounded hover:bg-indigo-300"
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

export default TextTranslator;
