import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.heading};
  }

  .btn {
    color: ${({ theme }) => theme.button};
    background-color: ${({ theme }) => theme.};
  }
  
  `;
