import { useContext } from "react";
import "./header.css";
import logo from "../../assets/develmatch.png";
import userImg from "../../assets/icons8-usename.png";
import { AccessContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { user, setAccess, setUser } = useContext(AccessContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAccess(null);
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className={"divHeader"}>
      <Link className={"divLogo"} to={"/"}>
        <img className={"imgLogo"} src={logo} alt="Logo Develmatch" />
      </Link>
      <div className={"userNameDiv"}>
        <div className={"divUserNameImg"}>
          <img className={"userNameImg"} src={userImg} alt="User Name image" />
        </div>
        {user ? (
          <>
            <p className="userName">{user.username}</p>
            <button className="logButton" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/signin">
            <button className="logButton">Iniciar sesión</button>
          </Link>
        )}
      </div>
    </div>
  );
}
