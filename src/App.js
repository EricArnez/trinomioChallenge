import React from "react";
import PersonsTable from "./components/PersonsTable";
import AddPersonModal from "./components/AddPersonModal";
import PersonsDataTable from "./components/PersonsDataTable";

function App() {
  return (
    <div className="App container">
      <AddPersonModal />
      <PersonsDataTable />
    </div>
  );
}

export default App;
