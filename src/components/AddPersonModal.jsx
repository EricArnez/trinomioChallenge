import React, { Component } from "react";
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
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.toggleModal}>
          Add New Person
        </Button>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader toggle={this.toggleModal}>Enter your data</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="First Name"
                  name="First Name"
                  id="firstName"
                  placeholder="First Name..."
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="Last Name"
                  name="Last Name"
                  id="lastName"
                  placeholder="Last Name..."
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Submit</Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
