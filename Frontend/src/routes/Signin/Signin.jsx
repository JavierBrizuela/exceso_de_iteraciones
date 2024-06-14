import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./components/Input";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //mode: 'no-cors',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.detail || 'Something went wrong');
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle successful login here
        navigate('/');
      })
      .catch((error) => {
        if (error.name === 'TypeError') {
          setApiError('Algo ha ido mal');
        } else {
          setApiError(error.message);
        }})
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
                required: "El email es obligatorio" 
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
      </form>
    </section>
  );
}

export default Signin;