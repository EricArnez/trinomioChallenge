import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CoursesCheckBoxs from "./CoursesCheckBoxs";

export default class AddCourseModal extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleSubmit = event => {
    console.log("handle submit de addcoursemodal");
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.toggleModal}>
          Add New Courses
        </Button>
        <Modal isOpen={this.state.isOpen} autoFocus={false}>
          <ModalHeader toggle={this.toggleModal}>
            Adding New Courses For {this.props.personFullName}
          </ModalHeader>
          <ModalBody>
            {" "}
            <CoursesCheckBoxs person={this.props.person} />
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Submit Changes
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
