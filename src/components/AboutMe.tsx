import React from "react";
import { styled } from "@mui/system";

import backgroundImage from "../assets/about.jpg";
import { Grid } from "@mui/material";

const AboutMeContainer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "75vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const ContentContainer = styled("div")({
  textAlign: "left",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
});

const H1 = styled("h1")({
  fontSize: "4em",
  color: "black",
});

const P = styled("p")({
  fontSize: "2em",
  maxWidth: "50%",
  margin: "auto",
  padding: "0.5em",
  color: "black",
});

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer id="about-me">
      <ContentContainer>
        <Grid style={{ textAlign: "left" }}>
          <H1>Who Am I</H1>
          <P>
            I'm Shoshana, I love to read and travel, and I volunteer at the MDA
            service.
          </P>
          <P>
            More then that I am a dedicated Full Stack Engineer with a strong
            backend orientation, specializing in implementing features from
            design to API within a microservice environment. I have a robust
            understanding of both front-end and back-end development.
          </P>
        </Grid>
      </ContentContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
