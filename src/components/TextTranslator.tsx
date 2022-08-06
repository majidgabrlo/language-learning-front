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
          title={!!translated ? <div>{translated}</div> : <div>Loading...</div>}
          icon={null}
          okText="OK"
        >
          <span
            className="transition py-0.5 px-[1px] rounded hover:bg-indigo-300"
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

export default TextTranslator;
