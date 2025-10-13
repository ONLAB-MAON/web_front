import styled from 'styled-components';

const AvgHeartTem = () => {
  return (
    <Container>
      <IconAvgHeartTem>
      ❤️‍🔥
      </IconAvgHeartTem>
      <TextAvgHeartTem>
        평균 마음 온도
      </TextAvgHeartTem>
      <TextBox>
        <TextAvg>
          6.3
        </TextAvg>
        <TextValue>
          /10
        </TextValue>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`

const IconAvgHeartTem = styled.div`
  width: 100%;
  height: 5rem;
  margin: 1.5rem auto 1.2rem;
  font-size: 4rem;
  text-align: center;
`

const TextAvgHeartTem = styled.p`
  color: #000;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.4rem;
`

const TextBox = styled.div`
  text-align: center;
  font-weight: 600;
`

const TextAvg = styled.span`
  width: 100%;
  color: #000;
  font-size: 1.125rem;
`

const TextValue = styled.span`
  width: 100%;
  color: #929292;
  font-size: 1rem;
`

export default AvgHeartTem;