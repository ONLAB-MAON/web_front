import styled from "styled-components";
import { ChevronRight } from "lucide-react";

const Counsel = () =>{
  return (
    <Container>
      <TitleBox>
        <Title>상담 요청</Title>
        <PlusText>자세히 보기<ChevronRight /></PlusText>
      </TitleBox>
      <StudentBox>
        <StudentText>최현우(3학년)</StudentText>
        <TimeText>11시 30분 ~ 11시 40분</TimeText>
        <SubmitBox>
          <YesButton>수락</YesButton>
          <NoButton>거절</NoButton>
        </SubmitBox>
      </StudentBox>
      <StudentBox>
        <StudentText>이승보(3학년)</StudentText>
        <TimeText>12시 50분 ~ 13시</TimeText>
        <SubmitBox>
          <YesButton>수락</YesButton>
          <NoButton>거절</NoButton>
        </SubmitBox>
      </StudentBox>
      <StudentBox>
        <StudentText>김용주(3학년)</StudentText>
        <TimeText>13시 30분 ~ 13시 40분</TimeText>
        <SubmitBox>
          <YesButton>수락</YesButton>
          <NoButton>거절</NoButton>
        </SubmitBox>
      </StudentBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const PlusText = styled.p`
  width: auto;
  display: flex;
  font-weight: 600;
  padding: 0;
  align-items: center;
  cursor: pointer;
  color: #000;

  &:hover {
    opacity: 0.8;
  }
`;

const StudentBox = styled.div`
  display: flex;
  width: 100%;
  margin-left: 4px;
  margin-bottom: 4px;
  justify-content: space-between;
  align-items: center;
  color: #000;
`;

const StudentText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const TimeText = styled.p`
  font-size: 15px;
  font-weight: 500;
`

const SubmitBox = styled.div`
  height: 40px;
`;

const YesButton = styled.button`
  background-color: ${({ theme }) => theme.dashButtonGreen};
  margin-right: 4px;
  color: #fff;
  font-weight: 500;
  padding: 8px 14px;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.dashDarkGreen};
  }
`;

const NoButton = styled.button`
  background-color: ${({ theme }) => theme.dashButtonPink};
  color: #fff;
  font-weight: 500;
  padding: 8px 14px;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.dashDarkPink};
  }
`;

export default Counsel;