import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import Project from "./project.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Project name="test"></Project>
      </header>
    </div>
  );
}

export default App;
