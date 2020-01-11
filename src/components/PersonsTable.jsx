import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

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
      return (
        <tr key={person.id}>
          <td>{person.first_name + " " + person.last_name}</td>

          <td>
            <Button>add new course</Button>
          </td>
          <td>
            <Button>modify Person</Button>
          </td>
          <td>
            <Button color="danger">remove person</Button>
          </td>
        </tr>
      );
    });

    return (
      <Table>
        <thead>
          <tr>
            <th>Persons</th>
            <th>Add Course</th>
            <th>Modify</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{renderTableRow}</tbody>
      </Table>
    );
  }
}
