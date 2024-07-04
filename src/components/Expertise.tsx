import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

export default function Expertise() {
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
        Expertise:
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        {[
          {
            headline: "Tech Stack:",
            content: "NodeJS, Linux, Express, React, MUI, Docker",
          },
          {
            headline: "Languages:",
            content: "JavaScript, Java, SQL, C, Python",
          },
          { headline: "Data Bases:", content: "MongoDB, PostgreSQL, MySQL" },
        ].map(({ headline, content }, index) => (
          <Box key={index} className="box-border-styling">
            <Typography variant="h5" style={{ textDecoration: "underline" }}>
              {headline}
            </Typography>
            <ul>
              {content.split(",").map((item, idx) => (
                <li key={idx}>
                  <Typography variant="h6">{item.trim()}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
