import { useState } from "react";
import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import CounselModal from "./CounselModal"; 

const requestData = [
  { name: "최현우(3학년)", time: "오전 11시 30분 ~ 40분", status: "거절" },
  { name: "이승보(3학년)", time: "오후 12시 50분 ~ 1시", status: "거절" },
  { name: "김용주(3학년)", time: "오후 1시 30분 ~ 40분", status: "거절" },
  { name: "신수지(3학년)", time: "오후 1시 50분 ~ 2시", status: "거절" },
];

const Counsel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 최신순 3명만 표시
  const latestThree = requestData.slice(0, 3);

  return (
    <>
      <Container>
        <TitleBox>
          <Title>상담 요청</Title>
          <PlusText onClick={() => setIsModalOpen(true)}>
            자세히 보기
            <ChevronRight size={18} />
          </PlusText>
        </TitleBox>

        {latestThree.map((item, index) => (
          <StudentBox key={index}>
            <StudentText>{item.name}</StudentText>
            <TimeText>{item.time}</TimeText>
            <SubmitBox>
              <YesButton>수락</YesButton>
              <NoButton>거절</NoButton>
            </SubmitBox>
          </StudentBox>
        ))}
      </Container>

      {isModalOpen && <CounselModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Counsel;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 1rem;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
`;

const PlusText = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  color: #000;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-left: 0.25rem;
  }
`;

const StudentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  color: #000;
`;

const StudentText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const TimeText = styled.p`
  font-size: 0.9375rem;
  font-weight: 500;
`;

const SubmitBox = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const YesButton = styled.button`
  background-color: ${({ theme }) => theme.dashButtonGreen };
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.dashDarkGreen };
  }
`;

const NoButton = styled.button`
  background-color: ${({ theme }) => theme.dashButtonPink };
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.dashDarkPink };
  }
`;
