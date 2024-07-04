import React from "react";
import { styled } from "@mui/system";
import { IconButton, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsAppButton = styled(IconButton)({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "green",
  color: "white",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "darkgreen",
  },
});

const Contact: React.FC = () => {
  const phoneNumber = "+972526716001";
  const message = "Hey, Shoshana! I would like to contact with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <FloatingWhatsAppButton>
        <WhatsAppIcon style={{ fontSize: 30 }} />
      </FloatingWhatsAppButton>
    </Link>
  );
};

export default Contact;
