import React, { Component } from "react";
import { CustomInput } from "reactstrap";

export default class CourseCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personHasIt: this.props.courseAndState.courseStateRegardingPerson
    };
    console.log(this.state.personHasIt, "<--- personHasIt del coursecheckbox");

    console.log(
      this.props.courseAndState,
      "<--- courseAndState del coursecheckbox"
    );
  }

  render() {
    return (
      <CustomInput
        type="checkbox"
        id={this.props.courseAndState.course.id}
        label={this.props.courseAndState.course.name}
        key={this.props.courseAndState.course.id}
      />
    );
  }
}
