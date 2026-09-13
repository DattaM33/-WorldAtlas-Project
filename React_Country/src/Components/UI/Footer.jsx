import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import footerContact from "../../api/footerapi.json";



function Footer() {

const footericon = {
  MPlace: <FaLocationDot />,
  Callus: <FaPhoneAlt />,
  Emailus: <MdEmail />,
};



  return (
    <footer className="footer-section">
      <div className="containerd gridd grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-card" key={index}>
                
              <div className="footer-icon">{footericon[icon]}</div>

              <div className="footer-text">
                <h3>{title}</h3>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;