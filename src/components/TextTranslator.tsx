import { Popconfirm } from "antd";
import { FC, useState } from "react";
import translator from "../utils/translator";

type TextTranslatorProps = {
  summary: string;
};
const TextTranslator: FC<TextTranslatorProps> = ({ summary }) => {
  const [translated, setTranslated] = useState("");
  const summaryAsArray = summary.split(" ");

  const translationHandler = async (word: string) => {
    setTranslated("");
    const data = await translator(word);
    setTranslated(data);
  };

  return (
    <>
      {summaryAsArray.map((word) => (
        <Popconfirm
          title={<div>{translated}</div>}
          okText="OK"
          cancelButtonProps={{ hidden: true }}
          icon={false}
        >
          <span onClick={() => translationHandler(word)} role="text">
            {word}{" "}
          </span>
        </Popconfirm>
      ))}
    </>
  );
};

export default TextTranslator;
