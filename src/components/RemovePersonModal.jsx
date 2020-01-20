import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CustomInput
} from "reactstrap";
import axios from "axios";

export default class RemovePersonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hide: this.props.hideConfirmationState
    };
    this.modalIsHiden = false;
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  hideConfirmation = () => {
    this.props.hideConfirmation();
    this.modalIsHiden = true;
  };

  handleRemove = () => {
    axios
      .delete(
        "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples/" +
          this.props.person.id
      )
      .then(res => {
        this.props.refreshParentComponent();
      })
      .catch(error => {
        if (error.response) {
          window.alert(error.response.data.message);
        }
      });

    //the whole page reloads only the first and only time the modal is set to hidden.
    if (this.modalIsHiden) {
      this.modalIsHiden = false;
      window.location.reload();
    }
  };

  render() {
    if (this.state.hide) {
      return (
        <Button color="danger" onClick={this.handleRemove}>
          Remove Person
        </Button>
      );
    } else {
      return (
        <React.Fragment>
          <Button color="warning" onClick={this.toggleModal}>
            Remove Person?
          </Button>
          <Modal isOpen={this.state.isOpen}>
            <ModalHeader toggle={this.toggleModal}>
              Removing {this.props.personFullName}
            </ModalHeader>
            <ModalBody>
              are you sure that you want to delete {this.props.personFullName}?
            </ModalBody>

            <ModalFooter>
              <Button
                color="danger"
                className="m-1"
                onClick={this.handleRemove}
              >
                Yes
              </Button>
              <Button onClick={this.toggleModal}>No</Button>
            </ModalFooter>
            <div>
              <CustomInput
                className="m-2"
                type="checkbox"
                onChange={this.hideConfirmation}
                defaultChecked={this.state.hide}
                id={this.props.person.id}
              >
                don't show me this message again
              </CustomInput>
            </div>
          </Modal>
        </React.Fragment>
      );
    }
  }
}
