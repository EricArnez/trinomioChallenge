import React, { Component } from "react";
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
        text: "First Name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "last_name",
        text: "Last Name",
        className: "name",
        align: "left",
        sortable: true
      },
      {
        key: "email",
        text: "Email",
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
            <AddCourseModal
              person={record}
              personFullName={personFullName}
              refreshParentComponent={this.refreshComponent}
            />
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
              refreshParentComponent={this.refreshComponent}
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
              refreshParentComponent={this.refreshComponent}
              hideConfirmation={this.hideConfirmation}
              hideConfirmationState={this.state.hideRemoveModals}
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
      persons: [],
      hideRemoveModals: localStorage.getItem("hideRemovModal")
    };

    this.lastPersonPageFromRestAPI = 0;
  }

  hideConfirmation = () => {
    localStorage.setItem("hideRemovModal", true);
  };

  setLastPersonPageFromRestAPI = async () => {
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples"
      )
      .then(res => {
        this.lastPersonPageFromRestAPI = res.data.last_page;
      });
  };

  getPersonFullNameOfRecord = record => {
    return record.first_name + " " + record.last_name;
  };

  async componentDidMount() {
    this.setState({ persons: await this.getPersonsDataFromAllPages() });
  }

  getPersonsDataFromAllPages = async () => {
    await this.setLastPersonPageFromRestAPI();
    let allPersons = [];
    let lPageNumber = this.lastPersonPageFromRestAPI;
    for (lPageNumber; lPageNumber > 0; lPageNumber--) {
      await (await this.getPersonsDataFromPage(lPageNumber)).forEach(person => {
        allPersons.push(person);
      });
    }
    return allPersons;
  };

  refreshComponent = async () => {
    let allPersons = await this.getPersonsDataFromAllPages();
    this.setState({ persons: allPersons });
  };

  getPersonsDataFromPage = async pageNumber => {
    let result = [];
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples?page=" +
          pageNumber
      )
      .then(res => {
        result = res.data.data;
        return result;
      });
    return result;
  };

  render() {
    return (
      <div>
        <AddPersonModal refreshParentComponent={this.refreshComponent} />

        <ReactDatatable
          config={this.config}
          records={this.state.persons}
          columns={this.columns}
        />
      </div>
    );
  }
}
