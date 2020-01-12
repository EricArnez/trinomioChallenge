import React from "react";
import { Button } from "reactstrap";
import PersonsTable from "./components/PersonsTable";
import AddPersonModal from "./components/AddPersonModal";

function App() {
  return (
    <div className="App container">
      <AddPersonModal />
      <PersonsTable />
    </div>
  );
}

export default App;
