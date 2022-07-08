import React from 'react';
import styled from 'styled-components';
import moment from "moment";

type Props = {
  title: string;
  date: Date;
  body: string;
  link?: string;
  image?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  padding: 30px 20px 18px;
  background-image: url(https://uploads-ssl.webflow.com/62c5fce152f02073d211e4b0/62c6035c722f9652681af0da_Screen%20Shot%202022-07-06%20at%202.49.04%20PM.png);
  border: 7px solid #000;
  border-radius: 15px;
  box-shadow: 7px 7px 0 -1px #000;
  gap: 18px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  color: #333;
  font-size: 16px;

  p {
    margin: 0;
  }
`

export const Title = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 32px;
  margin: 0;
`

export const Image = styled.img``

export const Button = styled.a`
  display: flex;
  background-color: #ff494b;
  color: white;
  justify-content: center;
  align-items: center;
  border: 5px solid #000;
  border-radius: 10px;
  padding: 9px 15px;
  font-size: 14px;
`

const Card: React.FC<Props> = ({ title, date, body, link, image }) => {

  return(
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <p><em>{moment(date).format("MMMM D, yyyy")}</em></p>
        <p>{body}</p>
      </TextContainer>
      {link && <Button href={link}>Read More</Button>}
    </Container>
  )
}

export default Card;