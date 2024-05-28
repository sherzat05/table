import { Route } from "react-router-dom";
import Table from "./components/Table";
import UserTable from "./components/UserTable";

function handleCLick() {
  alert("Hello World");
}

function App() {
  return (
   <Table handle={handleCLick}/>
  );
}

export default App;
