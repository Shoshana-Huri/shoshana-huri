import React from "react";
import { Grid, Typography, Link, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";

import TodoImage from "../../assets/todo-app/main.jpg";

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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .projects": {
          maxWidth: "371px", // Adjust as needed
        },
      }}
    >
      <ImageContainer>
        <ProjectImage
          src={TodoImage}
          alt="Project Photo"
          className="projects"
        />
        <GitHubLink
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            className="projects"
            sx={{ fontSize: 32, color: "black" }}
          />
        </GitHubLink>
      </ImageContainer>

      <Typography
        variant="h4"
        sx={{
          color: "black",
          width: "10em",
          textAlign: "center",
          marginBottom: "auto",
        }}
      >
        Todo's App
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div>
          <Typography variant="body1">
            This app helps users manage tasks efficiently with a calendar that
            highlights relevant tasks daily and a pie chart summarizing task
            completion status. It includes a user menu for profile management
            and mood expression, along with sign-in/sign-out options for
            convenience.
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Tech Stack:
          </Typography>
          <Typography variant="body1">React, MUI, JavaScript</Typography>
        </div>
      </Box>
    </Grid>
  );
};

export default Todo;
