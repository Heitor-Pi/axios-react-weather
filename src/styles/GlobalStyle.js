import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-family: ${({ theme }) => theme.typography.primary};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`
