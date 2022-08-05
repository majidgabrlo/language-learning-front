import { FC } from "react";

type TextTranslatorProps = {
  summary: string;
};
const TextTranslator: FC<TextTranslatorProps> = ({ summary }) => {
  const summaryAsArray = summary.split(" ");

  return (
    <>
      {summaryAsArray.map((word) => (
          <span>{word} </span>
      ))}
    </>
  );
};

export default TextTranslator;
