import styled from 'styled-components';
import AvgHeartTem from '../components/DashBoard/AvgHeartTem';
import StuHeart from '../components/DashBoard/StuHeart';
import Counsel from '../components/DashBoard/Counsel';
import Notice from '../components/DashBoard/Notice';
import Chart from '../components/DashBoard/Chart';

const DashBoard = () => {
  return (
    <Container>
      <Title>관리자 대시보드</Title>
      <Box>
        <ContentAvgHeartTem>
          <AvgHeartTem />
        </ContentAvgHeartTem>
        <ContentStuHeart>
          <StuHeart />
        </ContentStuHeart>
        <ContentCounsel>
          <Counsel />
        </ContentCounsel>
      </Box>
      <Box>
        <ContentNotice>
          <Notice />
        </ContentNotice>
        <ContentChart>
          <Chart />
        </ContentChart>
        <ContentPlan>추후 개발 예정</ContentPlan>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 3.4rem 3rem;
  margin-top: 0;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.noticeText};
`;

const Box = styled.div`
  min-height: 220px;
  width: 100%;
  display: flex;
  gap: 12px;
`;

const ContentAvgHeartTem = styled.div`
  background-color: ${({ theme }) => theme.dashLightGreen};
  width: 12rem;
  height: 220px;
  border-radius: 10px;
`;

const ContentStuHeart = styled.div`
  background-color: ${({ theme }) => theme.dashBlue};
  width: 38rem;
  height: 220px;
  border-radius: 10px;
`;

const ContentCounsel = styled.div`
  background-color: ${({ theme }) => theme.dashYellow};
  width: 38rem;
  height: 220px;
  border-radius: 10px;
`;

const ContentNotice = styled.div`
  background-color: ${({ theme }) => theme.dashDarkPink};
  width: 38rem;
  height: 300px;
  border-radius: 10px;
`;

const ContentChart = styled.div`
  background-color: ${({ theme }) => theme.dashDarkGreen};
  width: 25rem;
  height: 300px;
  border-radius: 10px;
`;

const ContentPlan = styled.div`
  background-color: ${({ theme }) => theme.dashLightPink};
  width: 25rem;
  height: 300px;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  padding: 140px 2rem;
`;


export default DashBoard;