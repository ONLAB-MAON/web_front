import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"
import PretendardRegular from "../assets/fonts/woff2/Pretendard-Regular.woff2";
import PretendardBold from "../assets/fonts/woff2/Pretendard-Bold.woff2";

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
    font-family: 'Pretendard', sans-serif;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

`;