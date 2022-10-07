import { gql } from "@apollo/client";
import { Popover } from "antd";
import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { useGetWordsQuery } from "./__generated__/Words";

function Words() {
  const currentLanguage = useAppSelector((state) => state.language);
  const { data,loading,refetch} = useGetWordsQuery({
    variables: {
      languageShortName: currentLanguage.selectedLanguage,
    },
  });

  useEffect(() => {
    refetch()
  }, [])
  

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-[1100px] mt-20 mx-auto rounded-lg">
      {!data?.wordsList.length && (
        <div className="text-center text-2xl">You didn't save any word for {currentLanguage.fullName}</div>
      )}
      {data?.wordsList.map((word) => (
        <Popover
          placement="right"
          title={word.word}
          content={word.meaning}
          trigger="click"
        >
          <div className="px-4 py-1 border-b text-lg">{word.word}</div>
        </Popover>
      ))}
    </div>
  );
}

gql`
  query GetWords($languageShortName: String!) {
    wordsList(languageShortName: $languageShortName) {
      word
      meaning
    }
  }
`;

export default Words;
