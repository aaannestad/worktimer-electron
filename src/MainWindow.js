import React, { useState } from "react";
import NewProjectButton from "./NewProjectButton";
import Project from "./Project";
import { Button } from "antd";

const project1 = {
  name: "test",
  time: "now",
};

export default function MainWindow() {
  const [projectList, setProjectList] = useState({ project1 });

  function addNewProject(project) {
    setProjectList({ ...projectList, project });
    console.log(projectList);
  }

  function handleNewProject() {
    const newTestProject = {
      name: "test addition",
      time: "now and again",
    };
    addNewProject(newTestProject);
    console.log(projectList);
  }

  // var projectList = {
  //   item1: {
  //     name: "test",
  //     time: "now",
  //   },
  //   item2: {
  //     name: "other",
  //     time: "then",
  //   },
  // };

  var projectElements = [];

  for (var item in projectList) {
    // This is the only way to create a list of Project components from an object
    projectElements.push(<Project name={projectList[item].name}></Project>);
    console.log(projectList[item].name);
    console.log(projectList);
  }

  return (
    <>
      <>{projectElements}</>
      <NewProjectButton onClick={() => handleNewProject()}></NewProjectButton>
    </>
  );
}
