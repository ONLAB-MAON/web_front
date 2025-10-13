import styled from "styled-components";
import { ChevronRight } from "lucide-react";

const PlusNotice = () => {
  
} 

const Notice = () => {
  return (
    <Container>
      <TitleBox>
        <Title>공지사항</Title>
        <PlusText onClick={PlusNotice}>더보기<ChevronRight /></PlusText>
      </TitleBox>
      <TextBox>
        <NoticeTitle>상담 신청을 하려면?</NoticeTitle>
        <Explanation>상담 신청을 하려면 하단에 있는 상담신청 버튼을 눌러주세요.</Explanation>
      </TextBox>
      <TextBox>
        <NoticeTitle>익명 상담 신청 방법</NoticeTitle>
        <Explanation>상담 신청안에 익명 상담 신청이 있습니다. 비밀번호를 잘 기억해주세요.</Explanation>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.25rem;
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
  margin-right: 0.125rem;

  &:hover {
    opacity: 0.8;
  }
`;

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 0.6rem;
`;

const NoticeTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 0.6rem;
  color: #000;
`;

const Explanation = styled.span`
  width: 100%;
  left: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: #000;
`;

export default Notice;