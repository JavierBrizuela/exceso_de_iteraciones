import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import Input from "./components/Input";
import "./Signin.css";
import { useNavigate, Link } from "react-router-dom";
import { AccessContext } from "../../App";
import { signIn } from "../../services/authService";
import { isAxiosError } from "axios";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const context = useContext(AccessContext);

  const onSubmit = async (data) => {
    try {
      const responseData = await signIn(data);

      localStorage.setItem("access", responseData.access);
      localStorage.setItem("refresh", responseData.refresh);
      context.setAccess(responseData.access);
      context.setRefresh(responseData.refresh);

      navigate("/");
    } catch (error) {
      if (isAxiosError(error) && error.response.data.detail) {
        setApiError(error.response.data.detail);
      } else {
        setApiError("Algo ha ido mal");
      }
    }
  };

  return (
    <section className="form-signin">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-titles">
          <h1>¡Bienvenid@ de nuevo!</h1>
          <h2>¡Continúa la aventura!</h2>
        </div>

        <div className="form-container">
          <div className="input-group">
            <Input
              id="email"
              registerProps={register("email", {
                required: "El email es obligatorio",
              })}
              type="email"
              placeholder="usuario@ejemplo.es"
              icon="email"
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="input-group">
            <Input
              id="password"
              registerProps={register("password", {
                required: "La contraseña es obligatoria",
              })}
              type="password"
              placeholder="Contraseña"
              icon="password"
              errorMessage={errors.password?.message || apiError}
            />
          </div>
        </div>

        <button type="submit" className="register">
          Entrar
        </button>

        <div className="signin-wrapper">
          <div className="signin-text-wrapper">
            <span className="line-sign left-line-sign"></span>
            <p className="signin-text">O si aún no tienes cuenta</p>
            <span className="line-sign right-line-sign"></span>
          </div>
          <Link className="account-signin-button" to={"/signup"}>
            Crea tu cuenta gratis
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Signin;
