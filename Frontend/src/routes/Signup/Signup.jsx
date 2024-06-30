import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./components/Input";
import "./Signup.css";
import { toast } from "react-hot-toast";
import { signUp } from "../../services/authService";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    signUp(data).then((data) => {
      if (data.email?.includes("Ya existe Usuario con este email.")) {
        toast.error("Ya existe un usuario con este email");
      } else {
        toast.success("¡Registro exitoso! Ahora inicia tu sesión");
        navigate("/signin");
      }
    });
  };

  const password = watch("password", "");

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
                minLength: {
                  value: 3,
                  message: "El nombre de usuario debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "El nombre de usuario no puede tener más de 15 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9ñÑ_-]+$/,
                  message:
                    "El nombre de usuario solo puede contener letras, números, la letra ñ o Ñ, guiones bajos (_) y guiones medios (-)",
                },
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
                required: "La contraseña es obligatoria",
                minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]+$/,
                  message:
                    "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
                },
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
                validate: (value) => value === password || "Las contraseñas no coinciden",
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
