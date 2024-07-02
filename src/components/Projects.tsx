import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

import Todo from "./projects/Todo";
import WatchDog from "./projects/WatchDog";

const ProjectsContainer = styled("div")({
  backgroundColor: "#F7DED0",
  color: "black",
  textAlign: "center",
  padding: "50px 20px",
});

const ProjectsGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-around", // Ensures items are evenly spaced
  gap: "20px", // Adjust the gap between items
  flexWrap: "wrap", // Allows items to wrap to the next line if needed
});

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <h1
        style={{
          margin: "auto",
          color: "black",
          marginBottom: "revert",
        }}
      >
        Projects
      </h1>

      <ProjectsGrid container>
        <Todo></Todo>
        <WatchDog></WatchDog>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
