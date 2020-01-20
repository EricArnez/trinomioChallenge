import React, { Component } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CoursesCheckBoxsContainer from "./CoursesCheckBoxsContainer";
import PersonInfoForm from "./PersonInfoForm";

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

  componentDidMount() {
    const { first_name, last_name, email } = this.props.person;
    this.setState({
      fName: first_name,
      lName: last_name,
      email: email
    });
  }

  handleSubmit = event => {
    if (this.shouldSendAlert()) {
      this.sendProperAlert();
    } else {
      const modifiedPerson = {
        first_name: this.state.fName,
        last_name: this.state.lName,
        email: this.state.email
      };
      axios
        .put(
          "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples/" +
            this.props.person.id,
          modifiedPerson
        )
        .then(res => {
          this.child.updatePersonCourses(modifiedPerson);
          this.props.refreshParentComponent();
          this.setState({ isOpen: false });
        })
        .catch(error => {
          if (error.response) {
            window.alert(error.response.data.message);
          }
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
        <Button color="primary" onClick={this.toggleModal}>
          Modify Person
        </Button>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader toggle={this.toggleModal}>
            Modifying {this.props.personFullName}
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

            <CoursesCheckBoxsContainer
              person={this.props.person}
              onRef={ref => (this.child = ref)}
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
