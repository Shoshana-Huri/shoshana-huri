import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

export default function About() {
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
      <Typography variant="h1" style={{ marginTop: "revert" }}>
        Who Am I
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <CustomBox
          headline="Education:"
          content="Mathematics (B.Sc.) Bar-Ilan University 2018 - 2021"
        />
        <CustomBox
          headline="Hobbies:"
          content="I enjoy reading books, traveling, and learning new things."
        />
        <CustomBox headline="Volunteer:" content="MDA Service" />
      </Box>
    </Box>
  );
}

interface CustomBoxProps {
  headline: string;
  content: string | React.ReactNode;
}

const CustomBox: React.FC<CustomBoxProps> = ({ headline, content }) => {
  return (
    <Box className="box-border-styling">
      <Typography variant="h4" style={{ textDecoration: "underline" }}>
        {headline}
      </Typography>
      <Typography variant="h5">{content}</Typography>
    </Box>
  );
};
