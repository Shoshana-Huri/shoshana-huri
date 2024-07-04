import { Box, Typography, useTheme } from "@mui/material";
import Todo from "./projects/Todo";
import WatchDog from "./projects/WatchDog";

export default function Projects() {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: {
          sm: `calc(${theme.spacing(8)} + 1px)`,
          md: `calc(${theme.spacing(9)} + 1px)`,
        },
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        display: "flex",
        flexDirection: "column",
        gap: "20px", // Adjust as needed
      }}
    >
      <Typography variant="h3" style={{ marginTop: "revert" }}>
        Projects:
      </Typography>

      <Box className="box-border-styling">
        <Todo></Todo>
      </Box>
      <Box className="box-border-styling">
        <WatchDog></WatchDog>
      </Box>
    </Box>
  );
}
