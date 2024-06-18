import { useContext } from "react";
import "./header.css";
import logo from "../../assets/develmatch.png";
import userImg from "../../assets/icons8-usename.png";
import { AccessContext } from "../../App";

export default function Header() {
  const { user } = useContext(AccessContext);
  console.log(user);

  return (
    <div className={"divHeader"}>
      <div className={"divLogo"}>
        <img className={"imgLogo"} src={logo} alt="Logo Develmatch" />
      </div>
      <div className={"userNameDiv"}>
        <p className={"userName"}>{user ? user.username : " "}</p>
        <div className={"divUserNameImg"}>
          <img className={"userNameImg"} src={userImg} alt="User Name image" />
        </div>
      </div>
    </div>
  );
}
