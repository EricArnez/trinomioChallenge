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
import CoursesCheckBoxs from "./CoursesCheckBoxs";

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
    event.preventDefault();
    const modifiedPerson = {
      first_name: this.state.fName,
      last_name: this.state.lName,
      email: this.state.email
    };
    axios
      .put(
        "http://earnezinochea.challenge.trinom.io/api/peoples/" +
          this.props.person.id,
        modifiedPerson
      )
      .then(res => {
        window.location.reload();
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
    this.child.updatePersonCourses();
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.toggleModal}>
          Modify Person
        </Button>
        <Modal isOpen={this.state.isOpen} autoFocus={false}>
          <ModalHeader toggle={this.toggleModal}>
            Modifying {this.props.personFullName}
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
                  placeholder={this.state.fName}
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
                  placeholder={this.state.lName}
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
                  placeholder={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </FormGroup>
            </Form>

            <CoursesCheckBoxs
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
