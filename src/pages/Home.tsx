import styled from "styled-components";
import onlabLogo from '/Logo.svg';
import { Link } from "react-router";

const Home = () => {
  return (
    <Contents>
      <img src={onlabLogo} alt="온랩 로고" />
      <Title>마음온도</Title>
      <ButtonGroup>
        <Link to='/login'>
          <LoginButton>로그인</LoginButton>
        </Link>
        <Link to='/signup'>
          <SignUpButton>회원가입</SignUpButton>
        </Link>
      </ButtonGroup>
      <Notice>* 이곳은 교사용 페이지 입니다.</Notice>
    </Contents>
  );
};

export default Home;

const Contents = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 100vh;           
  width: 100%;
  text-align: center;
  gap: 20px; 
  background-color: ${({ theme }) => theme.bgColor};
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #FFD446;
  margin-top: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 200px;

  & > a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor}; 
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  width: 100%;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }
  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
  background-color: ${({ theme }) => theme.bgSignButton}; 
  color: ${({ theme }) => theme.signButtonText};
  font-weight: 600;
  font-size: 16px;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  width: 100%;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }
  &:focus {
    outline: none;
  }
`;

const Notice = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.5;
  margin-top: 10px;
`;