//@ts-nocheck
import React from 'react';
import NavBar from '../nav-bar/NavBar';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 60px;
`

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
    </>
  )
}

export default MainLayout;