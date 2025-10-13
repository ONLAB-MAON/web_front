import styled from "styled-components";
import { X } from "lucide-react";

const requestData = [
  { name: "최현우(3학년)", time: "오전 11시 30분 ~ 40분", status: "거절" },
  { name: "이승보(3학년)", time: "오후 12시 50분 ~ 1시", status: "거절" },
  { name: "김용주(3학년)", time: "오후 1시 30분 ~ 40분", status: "거절" },
  { name: "신수지(3학년)", time: "오후 1시 50분 ~ 2시", status: "거절" },
];

const CounselModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <Title>상담 요청</Title>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </Header>

        <Table>
          <thead>
            <tr>
              <Th>이름</Th>
              <Th>채팅 예약 상담 시간</Th>
              <Th>수락 거절 여부</Th>
            </tr>
          </thead>
          <tbody>
            {requestData.map((item, index) => (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.time}</Td>
                <Td>
                  <ButtonGroup>
                    <AcceptButton>수락</AcceptButton>
                    <RejectButton>거절</RejectButton>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </ModalContainer>
    </Overlay>
  );
};

export default CounselModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 754px;
  height: 512px;
  padding: 1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  color: #333;

  &:hover {
    opacity: 0.7;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const Th = styled.th`
  font-size: 0.9375rem;
  color: #000;
  padding: 0.5rem 0;
`;

const Tr = styled.tr`

`;

const Td = styled.td`
  font-size: 0.9375rem;
  font-weight: 500;
  color: #333;
  padding: 0.625rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const AcceptButton = styled.button`
  background-color: ${({ theme }) => theme.dashButtonGreen };
  border: none;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.dashDarkGreen };
  }
`;

const RejectButton = styled.button`
  background-color: ${({ theme }) => theme.dashButtonPink };
  border: none;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.dashDarkPink };
  }
`;
