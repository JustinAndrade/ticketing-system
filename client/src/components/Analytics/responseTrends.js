import React from "react";
import { Bar } from "react-chartjs-2";
import { Container, Card, CardHeader, Progress, Grid } from "semantic-ui-react";

const data = {
  labels: ["Active Projects", "Pending Approval", "Ready for Action"],
  datasets: [
    {
      borderWidth: 1,
      data: [65, 22, 122],
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
};

const ResponseTrends = () => {
  return (
    <Container>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default ResponseTrends;
