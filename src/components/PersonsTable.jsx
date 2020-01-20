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

  count = 0;

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples"
      )
      .then(res => {
        this.setState({ persons: res.data.data });
      });
  }

  comparePersonsByName(person1, person2) {
    if (person1.first_name < person2.first_name) {
      return -1;
    }
    if (person1.first_name > person2.first_name) {
      return 1;
    }
    return 0;
  }

  sortPersonsByName = () => {
    this.state.persons.sort(this.comparePersonsByName);
  };

  getCountAndIncrement = () => {
    let prevCount = this.count;
    let nextCount = this.count + 1;
    this.count = nextCount;

    return prevCount;
  };

  render() {
    this.sortPersonsByName();
    let renderTableRow = this.state.persons.map(person => {
      let personFullName = person.first_name + " " + person.last_name;
      return (
        <tr key={person.id}>
          <td>{this.getCountAndIncrement()}</td>
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
      <Table size="sm" hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Person</th>
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
