import React from "react";
import { Card, Progress, CardHeader, Container } from "semantic-ui-react";
import tickets from "../../JSON/tickets.json";

const ProgressBar = () => {
  let open = [];
  let highPriority = [];
  let waiting = [];

  tickets.map((ticket) => {
    if (ticket.status == "Open") open.push(ticket);
    if (ticket.priority == "High") highPriority.push(ticket);
    if (ticket.progress == "Waiting") waiting.push(ticket);
  });

  return (
    <Container style={{ padding: "2%" }}>
      <Progress value={open.length} total={tickets.length} progress="ratio">
        Open Tickets
      </Progress>
      <Progress
        value={highPriority.length}
        total={tickets.length}
        progress="ratio"
      >
        High Priority
      </Progress>
      <Progress value={waiting.length} total={tickets.length} progress="ratio">
        Waiting on me
      </Progress>
      <Progress value={3} total={tickets.length} progress="ratio">
        Unassigned
      </Progress>
    </Container>
  );
};

export default ProgressBar;
