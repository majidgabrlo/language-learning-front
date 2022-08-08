import { Card as CardContainer } from "antd";
import Meta from "antd/lib/card/Meta";
import Modal from "antd/lib/modal/Modal";
import TextTranslator from "./TextTranslator";
import { FC } from "react";

type CardProps = {
  imageURL: string;
  title: string;
  description: string;
  summary: string;
  isOpen: boolean;
  id: string;
  onSelect: (id: string) => void;
};
const Card: FC<CardProps> = ({
  description,
  imageURL,
  title,
  summary,
  id,
  onSelect,
  isOpen = false,
}) => {
  return (
    <CardContainer
      hoverable
      style={{ width: 240 }}
      onClick={() => {
        if (!isOpen) onSelect(id);
      }}
      cover={<img alt="example" src={imageURL} className="h-40 object-cover" />}
    >
      <Meta title={title} description={description} />
      <Modal
        onCancel={() => {
          onSelect("");
        }}
        title={description}
        centered
        visible={isOpen}
        onOk={() => {
          onSelect("");
        }}
        width={1000}
        cancelButtonProps={{ hidden: true }}
      >
        <div>
          <img
            src={imageURL}
            className="h-64 mx-auto rounded shadow"
            alt={title}
          />
          <div className="mt-6">
            <TextTranslator summary={summary} />
          </div>
        </div>
      </Modal>
    </CardContainer>
  );
};

export default Card;
