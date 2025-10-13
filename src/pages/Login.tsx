import React, { useState } from 'react';
import styled from 'styled-components';
import onlabLogo from '/Logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIdError(e.target.value.trim() === '');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.trim() === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id.trim() === '' && password.trim() === '') {
      setIdError(true);
      setPasswordError(true);
      return;
    }
    // 로그인 처리 로직
  };

  return (
    <Container>
      <StyledLink to="/">
        <Logo src={onlabLogo} alt="온랩 로고" />
      </StyledLink>
      <Title>마음온도</Title>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
            hasError={idError}
          />
          {idError && <ErrorText>아이디를 입력해주세요.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
            hasError={passwordError}
          />
          {passwordError && <ErrorText>비밀번호를 입력해주세요.</ErrorText>}
        </InputWrapper>
        <SubmitButton type="submit">로그인</SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFD446; 
  margin: 0;
`;

const Form = styled.form`
  max-width: 20rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 0.875rem;
  background-color: ${({theme}) => theme.bgInput};
  color: ${({theme}) => theme.textColor};
  border: 0.09375rem solid ${({ hasError, theme }) => hasError ? '#FF0000' : theme.inputBorder};
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 0.5rem;
  &:focus {
    border-color: ${({theme}) => theme.buttonColor};
  }
`;

const ErrorText = styled.span`
  position: absolute;
  top: 2.875rem;
  left: 0px;
  font-size: 0.75rem;
  color: #FF4D4F;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.75rem 0;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0.1875rem 0.375rem rgba(0,0,0,0.1);
  }

  &:focus {
    outline: none;
  }
`;