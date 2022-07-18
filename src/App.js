import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import Project from "./Project";
const ipcRenderer = require("electron");

const testProjects = ["test1", "testagain"];

// ipcRenderer.send("read-file");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {testProjects.map((project) => (
          <Project name={project}></Project>
        ))}
      </header>
    </div>
  );
}

export default App;
