import { useForm } from "react-hook-form";
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
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>¡Bienvenid@ a Develmatch!</h1>
      <h2>¿Comenzamos la aventura?</h2>

      <div className="form-container">
        <div className="input-group">
          <div>
            <label htmlFor="nombre" className="input-icon"></label>
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </div>
          <div>
            <label htmlFor="apellido" className="input-icon"></label>
            <input
              type="text"
              placeholder="Apellido"
              {...register("apellido", { required: "El apellido es obligatorio" })}
            />
            {errors.apellido && <span>{errors.apellido.message}</span>}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="nombre-de-usuario" className="input-icon"></label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            {...register("nombreDeUsuario", { required: "El nombre de usuario es obligatorio" })}
          />
          {errors.nombreDeUsuario && <span>{errors.nombreDeUsuario.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="email" className="input-icon"></label>
          <input
            type="email"
            placeholder="usuario@ejemplo.es"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "El formato del email es incorrecto",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="clave" className="input-icon"></label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("clave", { required: "La contraseña es obligatoria" })}
          />
          {errors.clave && <span>{errors.clave.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="repite-clave" className="input-icon"></label>
          <input
            type="password"
            placeholder="Repite la contraseña"
            {...register("repiteClave", { required: "Debe repetir la contraseña" })}
          />
          {errors.repiteClave && <span>{errors.repiteClave.message}</span>}
        </div>
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Signup;
