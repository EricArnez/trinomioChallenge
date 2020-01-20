import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CoursesCheckBoxsContainer from "./CoursesCheckBoxsContainer";

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

  handleSubmit = async () => {
    await this.child.updatePersonCourses(this.props.person);
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.toggleModal}>
          Courses
        </Button>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader toggle={this.toggleModal}>
            Adding New Courses For {this.props.personFullName}
          </ModalHeader>
          <ModalBody>
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
