import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CoursesCheckBoxs from "./CoursesCheckBoxs";

export default class AddCourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.coursesWithStateRegardingPerson = [];
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleSubmit = event => {
    this.child.updatePersonCourses();
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.toggleModal}>
          Courses
        </Button>
        <Modal isOpen={this.state.isOpen} autoFocus={false}>
          <ModalHeader toggle={this.toggleModal}>
            Adding New Courses For {this.props.personFullName}
          </ModalHeader>
          <ModalBody>
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
