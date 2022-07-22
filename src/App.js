import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import Project from "./Project.js";
import NewProjectButton from "./NewProjectButton";
import dayjs from "dayjs";

const testData = {
  item1: {
    name: "test",
    time: "now",
  },
  item2: {
    name: "other",
    time: "then",
  },
};

var projectElements = [];

for (var item in testData) {
  // This is the only way to create a list of Project components from an object
  projectElements.push(<Project name={testData[item].name}></Project>);
}

function handleNewProject() {
  console.log("New project button");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>{projectElements}</>
        <NewProjectButton onClick={() => handleNewProject()}></NewProjectButton>
      </header>
    </div>
  );
}

export default App;
