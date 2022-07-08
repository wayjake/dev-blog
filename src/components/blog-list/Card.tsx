import React, { useState, useEffect } from 'react';
import moment from "moment";
import { MainContainer, BodyContainer, TextContainer, Title, Image, Button } from "./Card.styled";
import { Tag, TagProp } from "../blocks/Tag";
import Link from "next/link";

type CardProps = {
  title?: string;
  date: Date;
  body?: string;
  link?: string;
  image?: string;
  tags?: TagProp[];
}

const Card: React.FC<CardProps> = ({ title, date, tags, body, link, image }) => {
  const [cardLink, setCardLink] = useState<string | undefined>("");

  useEffect(() => {
    setCardLink(link);
  }, []);

  return(
    <MainContainer>
      {image && <Image src={image} />}
      <BodyContainer>
        <TextContainer>
          <Title>{title}</Title>
          <p><em>{moment(date).format("MMMM D, yyyy")}</em></p>
          <p>{tags && tags[0] && `Tags: `}<Tag values={tags ? tags : null}/></p>               
          <p>{body}</p>
        </TextContainer>
        {cardLink && <Link href={cardLink}><a><Button>Read More</Button></a></Link>}
      </BodyContainer>
    </MainContainer>
  )
}

export default Card;