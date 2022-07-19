import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import Project from "./project.js";

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
  projectElements.push(<Project name={testData[item].name}></Project>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>{projectElements}</>
      </header>
    </div>
  );
}

export default App;
