import "./footer.css";
import iconFacebook from "../../assets/icons8-facebook-50.png";
import iconInstagram from "../../assets/icons8-instagram-24.png";
import iconTwitter from "../../assets/icons8-twitter-50.png";
import iconLinkedin from "../../assets/icons8-linkedin-50.png";
import iconMail from "../../assets/icons8-mail-50.png";
import iconYoutube from "../../assets/icons8-youtube-50.png";
import logo from "../../assets/develmatch.png";

function Footer() {
  return (
    <div className={"footer"}>
      <div className={"socialMedia"}>
        <span className={`${"line"} ${"leftLine"}`}></span>
        <div className={"socialMediaLogos"}>
          <img src={iconFacebook} alt="Icono Facebook" className={"imgIcon"} />
          <img src={iconInstagram} alt="Icono Instagram" className={"imgIcon"} />
          <img src={iconTwitter} alt="Icono Twitter" className={"imgIcon"} />
          <img src={iconLinkedin} alt="Icono LinkedIn" className={"imgIcon"} />
          <img src={iconMail} alt="Icono Mail" className={"imgIcon"} />
          <img src={iconYoutube} alt="Icono YouTube" className={"imgIcon"} />
        </div>
        <span className={`${"line"} ${"rightLine"}`}></span>
      </div>
      <div className={"politicalInfo"}>
        <img className={"imgLogoFooter"} src={logo} alt="Logo Develmatch" />
        <p className={"copyright"}>Copyright© 2024 Develmatch</p>
        <a href="https://opensource.org/licenses/MIT">
          <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
        </a>

        {/*<p className={"legalLink"}>Información legal | Política de privacidad</p>*/}
      </div>
    </div>
  );
}

export default Footer;
