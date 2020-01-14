import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, CustomInput } from "reactstrap";

export default class AddCourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      courses: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://earnezinochea.challenge.trinom.io/api/peoples/" +
          this.props.personID
      )
      .then(res => {
        console.log(res, "<<---- respuesta del get");
        this.setState({ person: res });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }

  getPersonFullName = () => {
    return "hardcodeado";
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">
            Adding Courses for {this.state.getPersonFullName}
          </Label>
          <div>
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox4"
              label="ejemplo hardcodeado"
              htmlFor="exampleCustomCheckbox4_X"
            />
          </div>
        </FormGroup>
      </Form>
    );
  }
}
