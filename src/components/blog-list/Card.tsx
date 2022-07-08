import React from 'react';
import styled from 'styled-components';

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
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px 18px;
  background-image: url(https://uploads-ssl.webflow.com/62c5fce152f02073d211e4b0/62c6035c722f9652681af0da_Screen%20Shot%202022-07-06%20at%202.49.04%20PM.png);
  border: 7px solid #000;
  border-radius: 15px;
  box-shadow: 7px 7px 0 -1px #000;
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
`

export const Title = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 33px;
`

export const Image = styled.img``
export const Button = styled.button``

const Card: React.FC<Props> = ({ title, date, body, link, image }) => {

  return(
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <p><em>{date.toISOString()}</em></p>
        <p>{body}</p>
      </TextContainer>
    </Container>
  )
}

export default Card;