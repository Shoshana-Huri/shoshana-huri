import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const ProjectContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
});

const WatchDog: React.FC = () => {
  return (
    <Grid
      item
      xs={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PetsIcon style={{ fontSize: "30px" }}></PetsIcon>
      <Typography variant="h4">WatchDog Service</Typography>
      <ProjectContent>
        <Typography variant="body1">
          This watchdog service ensures process reliability by having processes
          monitor and keep each other alive. It uses signals for inter-process
          communication (IPC), employs a multithreaded architecture, and
          resolves synchronization issues with semaphores, ensuring efficient
          and reliable system operation.
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Tech Stack:
          </Typography>
          <Typography variant="body1">
            Signals, Posix Semaphore API, C
          </Typography>
        </Typography>
      </ProjectContent>
    </Grid>
  );
};

export default WatchDog;
