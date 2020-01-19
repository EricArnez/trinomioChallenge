import PersonInfoForm from "./PersonInfoForm";
import React, { Component } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class AddPersonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      fName: "",
      lName: "",
      email: ""
    };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
    if (this.state.isOpen === false) {
      this.setState({ fName: "", lName: "", email: "" });
    }
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
    if (this.shouldSendAlert()) {
      this.sendProperAlert();
    } else {
      const newPerson = {
        first_name: this.state.fName,
        last_name: this.state.lName,
        email: this.state.email
      };
      axios
        .post("http://earnezinochea.challenge.trinom.io/api/peoples", newPerson)
        .then(res => {
          window.location.reload();
        })
        .catch(error => {
          window.alert(error.response.data.message);
          console.log(error.response);
        });
    }
  };

  shouldSendAlert = () => {
    return this.hasEmptyFields() || !this.state.email.includes("@");
  };

  sendProperAlert = () => {
    if (this.hasEmptyFields()) {
      window.alert("please fill all the fields");
    } else if (this.hasInvalidEmail()) {
      window.alert("invalid email");
    }
  };

  hasEmptyFields = () => {
    let result = false;
    result =
      this.state.fName === "" ||
      this.state.lName === "" ||
      this.state.email === "";
    return result;
  };

  hasInvalidEmail = () => {
    return !this.state.email.includes("@");
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
            <PersonInfoForm
              parentHandleFNameChange={this.handleFNameChange}
              parentHandleLNameChange={this.handleLNameChange}
              parentHandleEmailChange={this.handleEmailChange}
              emailValue={this.state.email}
              fNameValue={this.state.fName}
              lNameValue={this.state.lName}
            />
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
