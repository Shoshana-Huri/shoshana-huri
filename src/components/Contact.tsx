import React from "react";
import { styled } from "@mui/system";
import { Grid, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactContainer = styled(Grid)({
  display: "flex",
  color: "black",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  padding: "30px",
});

const ContactHeadline = styled("h2")({
  marginBottom: "20px",
});

const ContactDetails = styled(Grid)({
  marginBottom: "10px",
  alignItems: "center",
});

const WhatsAppLink = styled(Link)({
  display: "inline-block",
  verticalAlign: "middle",
  marginLeft: "10px",
  color: "black",
  textDecoration: "none",
});

const Contact: React.FC = () => {
  const phoneNumber = "+972526716001";
  const message = "Hey, Shoshana! I would like to contact with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <ContactContainer container>
      <ContactDetails item style={{ margin: "10px" }}>
        <ContactHeadline>Contact Me:</ContactHeadline>
        <h3>Phone:</h3>
        <div> 0526716001</div>

        <WhatsAppLink
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon style={{ fontSize: 30, color: "green" }} />
        </WhatsAppLink>

        <h3>Email:</h3>
        <div>shoshuri1@gmail.com</div>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;
