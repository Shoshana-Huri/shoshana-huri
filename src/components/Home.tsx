import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

import homeImage from "../assets/home.jpeg";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 0.8),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Main() {
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
      }}
    >
      <DrawerHeader />
      <Box display="flex" justifyContent="space-between">
        <Box
          className="box-border-styling"
          sx={{ flex: 1, marginLeft: 1, height: "70vh" }}
        >
          <Typography
            variant="h2"
            style={{ color: theme.palette.text.primary, marginBottom: "10px" }}
          >
            Shoshana's Portfolio
          </Typography>
          <Typography
            variant="h4"
            style={{ color: theme.palette.text.primary, marginBottom: "10px" }}
          >
            Full Stack Engineer
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
            Welcome to my personal portfolio website. Here you will find
            information about my skills, projects, and more.
          </Typography>
        </Box>
        <Box
          className="box-border-styling"
          sx={{ flex: 1, marginLeft: 2, height: "70vh" }}
        >
          <img
            src={homeImage}
            alt="Shoshana"
            style={{
              maxWidth: "90%",
              height: "90%",
              objectFit: "contain",
              display: "block",
              margin: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
