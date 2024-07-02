import React from "react";
import { styled } from "@mui/system";

import homeImage from "../assets/home.jpeg";

const MainContainer = styled("div")({
  backgroundColor: "#F7DED0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "20px",
});

const Content = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
});

const ImageContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "25%",
  maxHeight: "30%",
});

const ProjectImage = styled("img")({
  maxWidth: "25%",
  maxHeight: "30%",
});

const Button = styled("button")({
  padding: "10px 20px",
  backgroundColor: "transparent",
  border: "1px solid #E2BFB3",
  cursor: "pointer",
  borderRadius: "17px",
  color: "black",
  fontSize: "1em",
  "&:hover": {
    backgroundColor: "#E2BFB3",
    color: "#F7DED0",
    transform: "scale(1.1)",
  },
});

const H1 = styled("h1")({
  fontSize: "5em",
});

const P = styled("p")({
  fontSize: "2em",
  margin: "auto",
});

const Main: React.FC = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MainContainer>
        <Content>
          <H1>Welcome to Shoshana Portfolio</H1>

          <ImageContainer>
            <ProjectImage
              src={homeImage}
              alt="Description"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </ImageContainer>
          <P>Full Stack Engineer</P>
          <Button
            onClick={scrollToAboutMe}
            style={{ fontFamily: "Garet, sans-serif" }}
          >
            About Me
          </Button>
        </Content>
      </MainContainer>
    </>
  );
};

export default Main;
