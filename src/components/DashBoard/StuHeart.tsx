import styled from 'styled-components';
import { Send } from 'lucide-react';

const StuHeart = () => {
  return (
    <Container>
      <Title>학생 감정 상태</Title>
      <Table>
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>학년/반</Th>
            <Th>감정</Th>
            <Th>마음온도</Th>
            <Th>메모</Th>
            <Th>알림 여부</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>최현우</Td>
            <Td>3-3</Td>
            <Td>좋음</Td>
            <Td><strong>9.9</strong>/10</Td>
            <Td>디자인이 재밌어요</Td>
            <Td><NoText>✕</NoText></Td>
          </Tr>
          <Tr>
            <Td>이승보</Td>
            <Td>3-3</Td>
            <Td>무기력</Td>
            <Td><strong>7</strong>/10</Td>
            <Td>아 집에 가고 싶다ㅠ</Td>
            <Td><SendWrapper><Send size={15} color="#002BFF" strokeWidth={2.5} /><SendText>전송</SendText></SendWrapper></Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #000;
`;

const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: unset;
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
`;

const Thead = styled.thead`
  width: 100%;
  margin: 0 auto;
`;

const Tbody = styled.tbody`
  width: 100%;
  margin: 0 auto;
`;

const Th = styled.th`
  color: #000;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
`;

const Tr = styled.tr`
  color: #000;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Td = styled.td`
  padding: 0.5rem 0.75rem; 
  font-size: 0.875rem;

  strong {
    font-weight: 700;
    color: #000;
  }
`;

const NoText = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
`

const SendWrapper = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const SendText = styled.p`
  font-size: 0.625rem; 
  margin-top: 0.1875rem;
`;

export default StuHeart;
