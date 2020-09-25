import React from "react";
import { Container, Card } from "semantic-ui-react";

export const cardStyle = {
  margin: "2%",
};

const Analytics = () => (
  <Container
    style={{
      height: "250px",
      display: "flex",
      justifyContent: "space-between",
      width: "80vw",
    }}
  >
    <Card style={cardStyle}>
      <p> test</p>
    </Card>
    <Card style={cardStyle}>
      <p>test</p>
    </Card>
    <Card style={cardStyle}>
      <p>test</p>
    </Card>
  </Container>
);

export default Analytics;
