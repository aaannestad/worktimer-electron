import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import Project from "./Project.js";
import NewProjectButton from "./NewProjectButton";
import dayjs from "dayjs";
import MainWindow from "./MainWindow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainWindow></MainWindow>
      </header>
    </div>
  );
}

export default App;
