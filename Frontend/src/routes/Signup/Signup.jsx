import { useForm } from "react-hook-form";
import Input from "./components/Input";
import "./Signup.css";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://127.0.0.1:8000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="form-signup">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-titles">
          <h1>¡Bienvenid@ a Develmatch!</h1>
          <h2>¿Comenzamos la aventura?</h2>
        </div>

        <div className="form-container">
          <div className="input-group">
            <Input
              id="nombre"
              registerProps={register("nombre", { required: "El nombre es obligatorio" })}
              type="text"
              placeholder="Nombre"
              icon="name"
              errorMessage={errors.nombre && errors.nombre.message}
            />
            <Input
              id="apellido"
              registerProps={register("apellido", { required: "El apellido es obligatorio" })}
              type="text"
              placeholder="Apellido"
              icon="surname"
              errorMessage={errors.apellido && errors.apellido.message}
            />
          </div>
          <div className="input-group">
            <Input
              id="username"
              registerProps={register("username", {
                required: "El nombre de usuario es obligatorio",
              })}
              type="text"
              placeholder="Nombre de usuario"
              icon="username"
              errorMessage={errors.username && errors.username.message}
            />
          </div>
          <div className="input-group">
            <Input
              id="email"
              registerProps={register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "El formato del email es incorrecto",
                },
              })}
              type="email"
              placeholder="usuario@ejemplo.es"
              icon="email"
              errorMessage={errors.email && errors.email.message}
            />
          </div>
          <div className="input-group">
            <Input
              id="password"
              registerProps={register("password", {
                required: "El contraseña es obligatorio",
              })}
              type="password"
              placeholder="Contraseña"
              icon="password"
              errorMessage={errors.password && errors.password.message}
            />
          </div>
          <div className="input-group">
            <Input
              id="passwordRepeat"
              registerProps={register("passwordRepeat", {
                required: "Debe repetir la contraseña",
              })}
              type="password"
              placeholder="Repite la contraseña"
              icon="password-repeat"
              errorMessage={errors.passwordRepeat && errors.passwordRepeat.message}
            />
          </div>
        </div>

        <button type="submit" className="register">
          Registrarse
        </button>
      </form>
    </section>
  );
}

export default Signup;
