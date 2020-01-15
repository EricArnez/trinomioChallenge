import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label } from "reactstrap";
import CourseCheckBox from "./CourseCheckBox";

export default class AddCourseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.coursesWithStateRegardingPerson = [];
    this.setMapCoursesWithStateRegardingPerson();
  }

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
    console.log(
      result,
      "<---- result de mapCourseswithstateregarding yadayadayada"
    );
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
        console.log(
          this.coursesWithStateRegardingPerson,
          "<--- dentro del then del set map"
        );
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  render() {
    let renderCheckBox = this.coursesWithStateRegardingPerson.map(
      courseAndState => {
        return (
          <CourseCheckBox
            courseAndState={courseAndState}
            key={courseAndState.course.id}
          />
        );
      }
    );
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">
            Adding Courses for {this.state.getPersonFullName}
          </Label>
          <div>{renderCheckBox}</div>
        </FormGroup>
      </Form>
    );
  }
}
