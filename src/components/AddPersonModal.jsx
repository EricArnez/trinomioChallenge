import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class AddPersonModal extends Component {
  state = {
    isOpen: false,
    fName: "",
    lName: "",
    email: ""
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleFNameChange = event => {
    this.setState({ fName: event.target.value });
  };
  handleLNameChange = event => {
    this.setState({ lName: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newPerson = {
      first_name: this.state.fName,
      last_name: this.state.lName,
      email: this.state.email
    };

    axios
      .post("http://earnezinochea.challenge.trinom.io/api/peoples", newPerson)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
    window.location.reload();
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.toggleModal} autoFocus>
          Add New Person
        </Button>
        <Modal isOpen={this.state.isOpen} autoFocus={false}>
          <ModalHeader toggle={this.toggleModal}>
            Adding a new person
          </ModalHeader>
          <ModalBody>
            <Form noValidate>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  value={this.state.fName}
                  type="First Name"
                  name="First Name"
                  id="firstName"
                  placeholder="First Name..."
                  onChange={this.handleFNameChange}
                  autoFocus={true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  value={this.state.lName}
                  type="Last Name"
                  name="Last Name"
                  id="lastName"
                  placeholder="Last Name..."
                  onChange={this.handleLNameChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  value={this.state.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  onChange={this.handleEmailChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
