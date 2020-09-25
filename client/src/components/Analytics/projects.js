import React from "react";
import { Doughnut } from "react-chartjs-2";
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

const Projects = () => {
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Column>
          <Doughnut data={data} height={10} width={100} options={options} />
        </Grid.Column>
        <Grid.Column>
          <div>
            <Progress value={12} total={20} progress="ratio">
              High Priority
            </Progress>
            <Progress value={22} total={20} progress="ratio">
              Waiting on me
            </Progress>
            <Progress value={3} total={20} progress="ratio">
              Unassigned
            </Progress>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Projects;
