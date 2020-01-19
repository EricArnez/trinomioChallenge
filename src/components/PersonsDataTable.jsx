import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import axios from "axios";
import AddCourseModal from "./AddCourseModal";
import ModifyPersonModal from "./ModifyPersonModal";
import AddPersonModal from "./AddPersonModal";

import RemovePersonModal from "./RemovePersonModal";

export default class PersonsDataTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        key: "first_name",
        text: "first_name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "last_name",
        text: "last_name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "email",
        text: "email",
        className: "postcode",
        sortable: true
      },
      {
        key: "Add Courses",
        text: "Add Courses",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
          let personFullName = this.getPersonFullNameOfRecord(record);

          return (
            <AddCourseModal person={record} personFullName={personFullName} />
          );
        }
      },
      {
        key: "Modify",
        text: "Modify",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
          let personFullName = this.getPersonFullNameOfRecord(record);
          return (
            <ModifyPersonModal
              person={record}
              personFullName={personFullName}
            />
          );
        }
      },
      {
        key: "Remove",
        text: "Remove",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
          let personFullName = this.getPersonFullNameOfRecord(record);
          return (
            <RemovePersonModal
              person={record}
              personFullName={personFullName}
            />
          );
        }
      }
    ];
    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      button: {
        excel: false,
        print: false,
        extra: false
      }
    };

    this.state = {
      persons: []
    };
  }

  getPersonFullNameOfRecord = record => {
    return record.first_name + " " + record.last_name;
  };

  componentDidMount() {
    axios
      .get("http://earnezinochea.challenge.trinom.io/api/peoples")
      .then(res => {
        console.log(res.data.data, " res . data .data");
        this.setState({ persons: res.data.data });
      });
  }

  render() {
    return (
      <div>
        <ReactDatatable
          config={this.config}
          records={this.state.persons}
          columns={this.columns}
          extraButtons={this.extraButtons}
        />
      </div>
    );
  }
}
