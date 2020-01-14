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
    axios
      .get(
        "http://earnezinochea.challenge.trinom.io/api/peoples/" +
          this.props.personID
      )
      .then(res => {
        const { first_name, last_name, email } = res.data;
        this.setState({
          fName: first_name,
          lName: last_name,
          email: email
        });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const modifiedPerson = {
      first_name: this.state.fName,
      last_name: this.state.lName,
      email: this.state.email
    };

    console.log(modifiedPerson, "<--- modified person");
    console.log(this.props.personID, "<--- person ID");

    axios
      .put(
        "http://earnezinochea.challenge.trinom.io/api/peoples/" +
          this.props.personID,
        modifiedPerson
      )
      .then(res => {
        console.log(res, "<-- respuesta del servidor");
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
