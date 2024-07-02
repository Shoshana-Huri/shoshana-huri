import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const ProjectTitle = styled("h2")({
  color: "black",
  width: "10em",
  textAlign: "center",
});

const ProjectContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
});

const Todo: React.FC = () => {
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
      <PetsIcon style={{ fontSize: "30px" }}></PetsIcon>
      <ProjectTitle>WatchDog Service</ProjectTitle>
      <ProjectContent>
        <div>
          This watchdog service ensures process reliability by having processes
          monitor and keep each other alive. It uses signals for inter-process
          communication (IPC), employs a multithreaded architecture, and
          resolves synchronization issues with semaphores, ensuring efficient
          and reliable system operation.
          <h4>Tech Stack:</h4>
          <div>Signals, Posix Semaphore API, C</div>
        </div>
      </ProjectContent>
    </Grid>
  );
};

export default Todo;
