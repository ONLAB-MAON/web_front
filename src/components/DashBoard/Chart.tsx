import styled from "styled-components";
import { PieChart, Pie, Cell, Legend } from "recharts";
import type { PieLabelRenderProps } from "recharts";

const data = [
  { name: "슬픔", value: 30, color: "#5388D8" },
  { name: "분노", value: 20, color: "#E65153" },
  { name: "기쁨", value: 20, color: "#F4BE37" },
  { name: "무기력", value: 15, color: "#FF8940" },
  { name: "불안", value: 15, color: "#A351C3" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  if (percent === undefined) return null; 

  const ir = Number(innerRadius ?? 0);
  const or = Number(outerRadius ?? 0);

  const radius = ir + (or - ir) / 2;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {(percent * 100).toFixed(0)}%
    </text>
  )
}

const Chart = () => {
  return (
    <Container>
      <Title>감정 분포</Title>
      <ChartBox>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="middle" align="left" layout="vertical"/>
        </PieChart>
      </ChartBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 600;
  left: 0;
  margin-bottom: -1.25rem;
  color: #000;
`;

const ChartBox = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export default Chart;