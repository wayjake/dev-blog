import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  border: 7px solid #000;
  border-radius: 15px;
  background-size: 406px
  box-shadow: 7px 7px 0 -1px #000;
  flex-direction: column;
  background-image: url(https://uploads-ssl.webflow.com/62c5fce152f02073d211e4b0/62c6035c722f9652681af0da_Screen%20Shot%202022-07-06%20at%202.49.04%20PM.png);
  gap: 30px;
  margin: 2%
`

export const BodyContainer = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 20px 18px;
  gap: 18px;
`

export const TextContainer = styled.div`
  display: flex;
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

export const Image = styled.img`
  display: flex;
  vertical-align: middle;
  width: 110%;  
  height: 130px;
  max-width: 100%;
  object-fit: cover;
  border-bottom: 6px solid #000;
`

export const Button = styled.a`
  display: block;
  background-color: #ff494b;
  color: white;
  border: 5px solid #000;
  border-radius: 10px;
  padding: 9px 15px;
  font-size: 14px;
  max-width: 7rem;
  float: right;
`