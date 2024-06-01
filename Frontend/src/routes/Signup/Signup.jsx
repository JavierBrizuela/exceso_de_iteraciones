function Signup() {
  return (
    <form className="form">
      <h1>¡Bienvenid@ a Develmatch!</h1>
      <h2>¿Comenzamos la aventura?</h2>

      <div className="form-container">
        <div className="input-group">
          <div>
            <label htmlFor="nombre" className="input-icon"></label>
            <input type="text" id="nombre" placeholder="Nombre"></input>
          </div>
          <div>
            <label htmlFor="apellido" className="input-icon"></label>
            <input type="text" id="apellido" placeholder="Apellido"></input>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="nombre-de-usuario" className="input-icon"></label>
          <input type="text" id="nombre-de-usuario" placeholder="Nombre de usuario"></input>
        </div>
        <div className="input-group">
          <label htmlFor="email" className="input-icon"></label>
          <input type="email" id="email" placeholder="usuario@ejemplo.es"></input>
        </div>
        <div className="input-group">
          <label htmlFor="clave" className="input-icon"></label>
          <input type="password" id="clave" placeholder="Contraseña"></input>
        </div>
        <div className="input-group">
          <label htmlFor="repite-clave" className="input-icon"></label>
          <input type="password" id="repite-clave" placeholder="Repite la contraseña"></input>
        </div>
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Signup;
