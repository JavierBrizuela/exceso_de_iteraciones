import "./header.css";
import logo from "../../assets/develmatch.png";
export default function Header() {
  return (
    <div className={"divHeader"}>
      <div className={"divLogo"}>
        <img className={"imgLogo"} src={logo} alt="Logo Develmatch" />
      </div>
      <div className={"userNameDiv"}>
        <p className={"userName"}>User Name</p>
      </div>
    </div>
  );
}
