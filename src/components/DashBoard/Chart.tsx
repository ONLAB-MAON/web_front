import styled from "styled-components";

const Chart = () => {
  return (
    <Container>
      <Title>감정 분포</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  left: 0;
`

export default Chart;