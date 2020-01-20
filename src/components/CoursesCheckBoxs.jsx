import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label } from "reactstrap";
import CourseCheckBox from "./CourseCheckBox";

export default class AddCourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesWithStateRegardingPerson: []
    };

    this.setMapCoursesWithStateRegardingPerson();
  }

  mapCoursesWithStateRegardingPerson = allCourses => {
    let result = [];
    allCourses.forEach(course => {
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
    this.props.person.courses.forEach(course => {
      if (course.id === courseID) {
        result = true;
      }
    });
    return result;
  };

  setMapCoursesWithStateRegardingPerson = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/courses"
      )
      .then(res => {
        let result = this.mapCoursesWithStateRegardingPerson(res.data);
        this.setState({ coursesWithStateRegardingPerson: result });
      })
      .catch(error => {
        if (error.response) {
          window.alert(error.response.data.message);
        }
      });
  };

  handleCheckboxChange = event => {
    this.state.coursesWithStateRegardingPerson.forEach(
      courseWithStateRegardingPerson => {
        if (
          courseWithStateRegardingPerson.course.id === Number(event.target.id)
        ) {
          courseWithStateRegardingPerson.courseStateRegardingPerson = !courseWithStateRegardingPerson.courseStateRegardingPerson;
        }
      }
    );
  };

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  updatePersonCourses = person => {
    let coursesCheckedResult = [];

    this.state.coursesWithStateRegardingPerson.forEach(cWs => {
      if (cWs.courseStateRegardingPerson) {
        coursesCheckedResult.push(cWs.course);
      }
    });
    let modifiedPersonCourses = person;
    modifiedPersonCourses.courses = coursesCheckedResult;

    axios
      .put(
        "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples/" +
          this.props.person.id,
        modifiedPersonCourses
      )
      .then(res => {
        this.props.refreshParentComponent();
      })
      .catch(error => {
        if (error.response) {
          window.alert(error.response.data.message);
        }
      });
  };

  render() {
    let renderCheckBox = this.state.coursesWithStateRegardingPerson.map(
      courseAndState => {
        return (
          <CourseCheckBox
            label={courseAndState.course.name}
            isSelected={courseAndState.courseStateRegardingPerson}
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
