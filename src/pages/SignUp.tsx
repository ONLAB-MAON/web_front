import React, { useState } from 'react';
import styled from 'styled-components';
import onlabLogo from '/Logo.svg';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [schoolError, setSchoolError] = useState(false);
  const [fileError, setFileError] = useState(false);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIdError(e.target.value.trim() === '');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.trim() === '');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(e.target.value.trim() === '');
  };

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
    setSchoolError(e.target.value.trim() === '');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileError(false);
    } else {
      setFile(null);
      setFileError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 검사
    setIdError(id.trim() === '');
    setPasswordError(password.trim() === '');
    setEmailError(email.trim() === '');
    setSchoolError(school.trim() === '');
    setFileError(file === null);

    if (
      id.trim() === '' ||
      password.trim() === '' ||
      email.trim() === '' ||
      school.trim() === '' ||
      file === null
    ) {
      return;
    }

    // 회원가입 처리 로직
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
        <InputWrapper>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
            hasError={emailError}
          />
          {emailError && <ErrorText>이메일을 입력해주세요.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="학교이름"
            value={school}
            onChange={handleSchoolChange}
            hasError={schoolError}
          />
          {schoolError && <ErrorText>학교 이름을 입력해주세요.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <FileInputLabel htmlFor="file-upload" fileError={fileError}>
          <LabelText hasFile={!!file}>{file ? file.name : '재직증명서'}</LabelText>
            <FileInput
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.png"
            />
          </FileInputLabel>
          {fileError ? (
            <ErrorText>재직증명서를 선택해주세요.</ErrorText> 
          ) : (
            <FileHelpText>
              ❗재직증명서는 교사를 <PointText>판별</PointText>하기 위해서만 사용됩니다.
            </FileHelpText>
          )}
        </InputWrapper>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </Form>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  width: auto;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

const Form = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 12px 14px;
  background-color: ${({ theme }) => theme.bgInput};
  color: ${({ theme }) => theme.textColor};
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? '#FF4D4F' : theme.inputBorder)};
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 8px;

  &:focus {
    border-color: ${({ theme }) => theme.buttonColor};
  }
`;

const FileInputLabel = styled.label<{ fileError?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgInput};
  border: 1.5px solid ${({ fileError, theme }) => (fileError ? '#FF4D4F' : theme.inputBorder)};
  border-radius: 6px;
  padding: 12px 14px;
  font-size: 16px;
  cursor: pointer;
`;

const LabelText = styled.span<{ hasFile: boolean }>`
  color: ${({ hasFile, theme }) => (hasFile ? theme.textColor : theme.inputText)};
  font-size: 14px;
  font-weight: 500;
`

const FileInput = styled.input`
  display: none;
`;

const FileHelpText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.noticeText};
  opacity: 0.6;
  margin-top: 4px;
`;

const ErrorText = styled.span`
  position: absolute;
  top: 46px;
  left: 0px;
  font-size: 12px;
  color: #FF4D4F;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 0;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }

  &:focus {
    outline: none;
  }
`;

const PointText = styled.span`
  color: ${({ theme }) => theme.noticeBlue};
`