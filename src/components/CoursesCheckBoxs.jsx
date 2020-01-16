import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label } from "reactstrap";
import CourseCheckBox from "./CourseCheckBox";

export default class AddCourseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxesAndCheckState: []
    };
    this.coursesWithStateRegardingPerson = [];
    this.setMapCoursesWithStateRegardingPerson();
    this.mapCourseIdAndCurrentState();
  }

  mapCourseIdAndCurrentState = () => {
    this.coursesWithStateRegardingPerson.map(courseAndState => {
      let courseIDAndCurrentCheckState = {
        courseID: courseAndState.course.id,
        checked: courseAndState.courseStateRegardingPerson
      };
      this.state.checkboxesAndCheckState.push(courseIDAndCurrentCheckState);
    });
  };

  mapCoursesWithStateRegardingPerson = allCourses => {
    let result = [];
    allCourses.map(course => {
      let courseWithState = {
        course: course,
        courseStateRegardingPerson: this.getStateOfCourseRegardingPerson(
          course.id
        )
      };
      result.push(courseWithState);
    });

    return result;
  };

  getStateOfCourseRegardingPerson = courseID => {
    let result = false;
    this.props.person.courses.map(course => {
      if (course.id === courseID) {
        result = true;
      }
    });
    return result;
  };

  setMapCoursesWithStateRegardingPerson = () => {
    axios
      .get("http://earnezinochea.challenge.trinom.io/api/courses")
      .then(res => {
        let result = this.mapCoursesWithStateRegardingPerson(res.data);
        this.coursesWithStateRegardingPerson = result;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  handleCheckboxChange = event => {
    this.coursesWithStateRegardingPerson.map(courseWithStateRegardingPerson => {
      if (courseWithStateRegardingPerson.course.id == event.target.id) {
        courseWithStateRegardingPerson.courseStateRegardingPerson = !courseWithStateRegardingPerson.courseStateRegardingPerson;
      }
    });
  };

  render() {
    let renderCheckBox = this.coursesWithStateRegardingPerson.map(
      courseAndState => {
        return (
          <CourseCheckBox
            label={courseAndState.course.name}
            isSelected={courseAndState.isSelected}
            onCheckboxChange={this.handleCheckboxChange}
            courseAndState={courseAndState}
            key={courseAndState.course.id}
            sendID={courseAndState.course.id}
          />
        );
      }
    );
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">
            Courses: {this.state.getPersonFullName}
          </Label>
          <div>{renderCheckBox}</div>
        </FormGroup>
      </Form>
    );
  }
}
