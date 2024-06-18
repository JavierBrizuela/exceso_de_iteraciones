import "./Error404.css";
import imgError from "../../assets/Error404.png";

export default function Error404() {
  return (
    <div className={"imgErrorDiv"}>
      <img src={imgError} alt="Error 404" className={"imgError"} />
      <p className={"textError"}>Upssss... Esta página no esta disponible</p>
    </div>
  );
}
