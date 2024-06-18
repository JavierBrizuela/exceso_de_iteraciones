import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import Input from "./components/Input";
import "./Signin.css";
import { useNavigate, Link } from "react-router-dom";
import { AccessContext } from "../../App";

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
      console.log(data);
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //mode: 'no-cors',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Something went wrong");
      }

      const responseData = await response.json();
      localStorage.setItem("access", responseData.access);
      localStorage.setItem("refresh", responseData.refresh);
      console.log(data);
      context.setAccess(responseData.access);

      navigate("/");
    } catch (error) {
      if (error.name === "TypeError") {
        setApiError("Algo ha ido mal");
      } else {
        setApiError(error.message);
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
