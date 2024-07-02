import React from "react";
import { styled } from "@mui/system";
import { Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import TodoImage from "../../assets/todo-app/main.jpg";

const ProjectTitle = styled("h2")({
  color: "black",
  width: "10em",
  textAlign: "center",
  marginBottom: "auto",
});

const ProjectContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
});

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
  maxWidth: "357px",
});

const ProjectImage = styled("img")({
  width: "100%",
  maxWidth: "371px",
  height: "auto",
  transition: "transform 0.3s ease-in-out",
});

const GitHubLink = styled(Link)({
  position: "absolute",
  top: "8px",
  right: "8px",
  color: "black",
});

const Todo: React.FC = () => {
  const githubRepoUrl = "https://github.com/Shoshana-Huri/todo-it.git";

  return (
    <Grid
      item
      xs={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="projects"
    >
      <ImageContainer>
        <ProjectImage src={TodoImage} alt="Project Photo" />
        <GitHubLink
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <GitHubIcon style={{ fontSize: 32 }} />
        </GitHubLink>
      </ImageContainer>

      <ProjectTitle>Todo's App</ProjectTitle>
      <ProjectContent>
        <div>
          This app helps users manage tasks efficiently with a calendar that
          highlights relevant tasks daily and a pie chart summarizing task
          completion status. It includes a user menu for profile management and
          mood expression, along with sign-in/sign-out options for convenience.
          <h4>Tech Stack:</h4>
          <div>React, MUI, JavaScript</div>
        </div>
      </ProjectContent>
    </Grid>
  );
};

export default Todo;
