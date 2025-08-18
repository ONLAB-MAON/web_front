import styled from "styled-components";
import { ChevronRight } from "lucide-react";

const Notice = () => {
  return (
    <Container>
      <TitleBox>
        <Title>공지사항</Title>
        <PlusText>더보기<ChevronRight /></PlusText>
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
  margin-right: 2px;

  &:hover {
    opacity: 0.8;
  }
`;

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 0.6rem;
`;

const NoticeTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 0.6rem;
`;

const Explanation = styled.span`
  width: 100%;
  left: 0;
  font-size: 12px;
  font-weight: 400;
`;

export default Notice;