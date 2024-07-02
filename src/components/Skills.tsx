import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const SkillsContainer = styled("div")({
  backgroundColor: "#E2BFB3",
  color: "black",
  textAlign: "center",
  padding: "50px 20px",
});

const SkillTitle = styled("h2")({
  color: "#fffff",
  width: "10em",
  textAlign: "center",
});

const SkillContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
});

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <h1 style={{ margin: "auto", color: "black", marginBottom: "revert" }}>
        Skills
      </h1>

      <Grid container style={{ justifyContent: "center", gap: "113px" }}>
        <Grid className="rounded-rectangle">
          <SkillTitle>Tech Stack</SkillTitle>
          <SkillContent>NodeJS</SkillContent>
          <SkillContent>Express</SkillContent>
          <SkillContent>React</SkillContent>
          <SkillContent>Docker</SkillContent>
          <SkillContent>Linux</SkillContent>
        </Grid>

        <Grid className="rounded-rectangle">
          <SkillTitle>Programming Languages</SkillTitle>
          <SkillContent>Java Script</SkillContent>
          <SkillContent>Java</SkillContent>
          <SkillContent>SQL</SkillContent>
          <SkillContent>C</SkillContent>
          <SkillContent>PYTHON</SkillContent>
        </Grid>

        <Grid className="rounded-rectangle">
          <SkillTitle>Data Bases</SkillTitle>
          <SkillContent>MySQL</SkillContent>
          <SkillContent>PostgreSQL</SkillContent>
          <SkillContent>MongoDB</SkillContent>
        </Grid>
      </Grid>
    </SkillsContainer>
  );
};

export default Skills;
