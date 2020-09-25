import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Divider,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Search,
  Sea,
  GridColumn,
} from "semantic-ui-react";
import { Bar } from "react-chartjs-2";
import ProgressBar from "./progressBar";
import ResponseTrends from "./responseTrends";
import TicketsTable from "../TicketsTable/table";

import "./analytics.css";
import Projects from "./projects";

import tickets from "../../JSON/tickets.json";

export const cardStyle = {
  margin: "5px",
  width: "30%",
  height: "4500px",
};

const Analytics = (props) => {
  return (
    <Container
      style={{
        marginRight: "0 !important",
        marginLeft: "0 !important",
        width: "88vw",
        float: "left",
      }}
    >
      <Grid
        stretched
        columns={3}
        style={{
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        <Grid.Row>
          <Grid.Column width={4}>
            <Card fluid>
              <CardHeader textAlign="left">Tickets</CardHeader>
              <CardContent></CardContent>
              <ProgressBar tickets={tickets} />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <CardHeader textAlign="left">Projects</CardHeader>
              <CardContent style={{ padding: "50px 0 0 0" }}>
                <Projects tickets={tickets} />
              </CardContent>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <CardHeader textAlign="left">TSR Response Trends</CardHeader>
              <CardContent style={{ padding: "50px 0 0 0" }}>
                <ResponseTrends tickets={tickets} />
              </CardContent>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <TicketsTable tickets={tickets} />
    </Container>
  );
};

export default Analytics;
