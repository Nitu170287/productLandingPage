import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-copyright">MeShop. &copy; 2023.</p>
      <div className="social-network-icon">
        <FacebookIcon style={{ color: "#f3f3f3" }} />
        <LinkedInIcon style={{ color: "#f3f3f3" }} />
        <InstagramIcon style={{ color: "#f3f3f3" }} />
      </div>
    </div>
  );
};
export default Footer;
