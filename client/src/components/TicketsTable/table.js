import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTickets } from "../../redux/actions";

import { Button, Checkbox, Icon, Table, Label } from "semantic-ui-react";
import { Progress } from "semantic-ui-react";
import BarLoader from "react-spinners/DotLoader";
import AddTicketModal from "./AddTicket";
import { render } from "react-dom";
import { css } from "@emotion/core";

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

const override = css`
  display: block;
  justify-content: center;
  margin: 20px 500%;
`;

const TicketsTable = (props) => {
  return (
    <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell>
            <Checkbox />
          </Table.HeaderCell>
          <Table.HeaderCell>TITLE</Table.HeaderCell>
          <Table.HeaderCell>PRIORITY</Table.HeaderCell>
          <Table.HeaderCell>ASSIGNED TO</Table.HeaderCell>
          <Table.HeaderCell>CREATED ON</Table.HeaderCell>
          <Table.HeaderCell>Created By</Table.HeaderCell>
          <Table.HeaderCell>AGE</Table.HeaderCell>
          <Table.HeaderCell>PROGRESS</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.tickets.length < 1 && (
          <BarLoader css={override} color="#2185D0" />
        )}
        {props.tickets.map((ticket) => (
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox />
            </Table.Cell>

            <Table.Cell>{ticket.title}</Table.Cell>
            <Table.Cell>
              {ticket.priority == "High" && (
                <Label color="red">{ticket.priority}</Label>
              )}
              {ticket.priority == "Medium" && (
                <Label color="yellow">{ticket.priority}</Label>
              )}
              {ticket.priority == "Low" && (
                <Label color="green">{ticket.priority}</Label>
              )}
            </Table.Cell>
            <Table.Cell>{ticket.title}</Table.Cell>
            <Table.Cell>
              {Date(ticket.age.toString()).substring(4, 16)}
            </Table.Cell>
            <Table.Cell>{ticket.username}</Table.Cell>
            <Table.Cell>
              <Label circular color="yellow">
                {Math.floor(ticket.age / 860000000000)}
              </Label>
            </Table.Cell>
            <Table.Cell>
              {ticket.progress == "Waiting" && (
                <Progress percent={0} label={ticket.progress} />
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="7">
            <AddTicketModal />

            <Button size="tiny">Approve</Button>
            <Button disabled size="small">
              Approve All
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default TicketsTable;
