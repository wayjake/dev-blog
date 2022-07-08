import { createGlobalStyle } from 'styled-components';

// background-image: url("/images/Main-Background.png");

const GlobalStyle = createGlobalStyle`
html,
body {
    background-image: url(https://uploads-ssl.webflow.com/62c5fce152f02073d211e4b0/62c5fe2db15a6bdc39140ed8_Screen%20Shot%202022-07-06%20at%202.26.43%20PM.png);
    background-color: #fff;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  @media screen and (max-width: 991px)
  .w-container {
      max-width: 728px;
  }

  .w-container:before, .w-container:after {
      content: " ";
      display: table;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-column-end: 2;
      grid-row-end: 2;
  }

  .w-container:after {
      clear: both;
  }

  .heading {
    font-family: 'DM Sans', sans-serif;
    font-style: italic;
    font-weight: 700;
  }

  div {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;