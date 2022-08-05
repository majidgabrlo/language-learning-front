import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";

type CardProps = {
  imageURL: string;
  title: string;
  description: string;
};
const Card: FC<CardProps> = ({ description, imageURL, title }) => {
  return (
    <CardContainer className="mx-auto" sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
