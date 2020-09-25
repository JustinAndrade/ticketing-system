import React from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Engineering", value: "Engineering" },
  { key: "f", text: "Marketing", value: "Marketing" },
  { key: "z", text: "Front Desk", value: "Front Desk" },
  { key: "o", text: "other", value: "other" }
];

class AddTicketModal extends React.Component {
  state = {
    title: "",
    email: "",
    description: "",
    department: ""
  };

  selectChange = (e, { value }) => {
    this.setState({ value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    const { value } = this.state;
    return (
      <Modal
        style={{ padding: "1%" }}
        closeIcon
        trigger={
          <Button floated="right" primary size="large">
            Create Ticket
          </Button>
        }
      >
        <Header icon="ticket" content="Create New Ticket" />
        <Modal.Content>
          <Form>
            <Form.Field
              required
              control={Input}
              label="Title"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.Group widths="equal">
              <Form.Field
                required
                control={Input}
                label="Email"
                placeholder="Your Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Field
                required
                control={Select}
                label="Department"
                options={options}
                placeholder="Select Department"
                name="department"
                onChange={this.selectChange}
              />
            </Form.Group>
            <Form.Field
              required
              style={{ height: "300px" }}
              control={TextArea}
              label="Description"
              placeholder="Tell us more about the issue..."
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <Form.Field color="green" control={Button}>
              Submit
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
export default AddTicketModal;
