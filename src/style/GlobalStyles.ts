import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html{
    font-size: 16px;
    height: 100%;
    width: 100%;
  }
  #root { 
    height: 100%;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
  }
  body{
    background-color: ${({ theme }: { theme: any}) => theme.bgColor};
    color: ${({ theme }: { theme: any}) => theme.textColor};
  }
  button{
    cursor: pointer;
    border-radius: 8px;
  }
`;