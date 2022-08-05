import { Card as CardContainer } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";

type CardProps = {
  imageURL: string;
  title: string;
  description: string;
};
const Card: FC<CardProps> = ({ description, imageURL, title }) => {
  return (
    <CardContainer
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={imageURL}
          className="h-40 object-cover"
        />
      }
    >
      <Meta title={title} description={description} />
    </CardContainer>
  );
};

export default Card;
