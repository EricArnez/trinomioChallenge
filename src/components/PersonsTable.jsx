import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import ModifyPersonModal from "./ModifyPersonModal";
import AddCourseModal from "./AddCourseModal";
import RemovePersonModal from "./RemovePersonModal";

export default class PersonsTable extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get("http://earnezinochea.challenge.trinom.io/api/peoples")
      .then(res => {
        this.setState({ persons: res.data.data });
      });
  }

  render() {
    let renderTableRow = this.state.persons.map(person => {
      let personFullName = person.first_name + " " + person.last_name;
      return (
        <tr key={person.id}>
          <td>{person.first_name + " " + person.last_name}</td>

          <td>
            <AddCourseModal person={person} personFullName={personFullName} />
          </td>
          <td>
            <ModifyPersonModal
              person={person}
              personFullName={personFullName}
            />
          </td>
          <td>
            <RemovePersonModal
              person={person}
              personFullName={personFullName}
            />
          </td>
        </tr>
      );
    });

    return (
      <Table>
        <thead>
          <tr>
            <th>Persons</th>
            <th>Add Courses</th>
            <th>Modify</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{renderTableRow}</tbody>
      </Table>
    );
  }
}
