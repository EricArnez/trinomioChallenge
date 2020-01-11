import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class PersonsTable extends Component {
  state = {
    persons: []
  };

  componentDidMount() {}

  render() {
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
        <tbody>
          <tr>
            <td>pepe</td>
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
        </tbody>
      </Table>
    );
  }
}
