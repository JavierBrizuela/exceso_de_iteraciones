import "./Home.css";

function Home() {
  return (
    <section className="projects-home">
      <div className="projects">
        <h1>Descubre algunos de estos proyectos</h1>
        <div className="project-list">
          <h1>hola1</h1>
          <h1>hola2</h1>
          <h1>hola3</h1>
        </div>
      </div>
      <div className="create-account">
        <h2>¿Te gustaría unirte a algún proyecto?</h2>
        <h2>¿O preferirías crear el tuyo propio?</h2>
        <h3>¡Únete a la comunidad Develmatch!</h3>
        <button>Crea tu cuenta gratis</button>
      </div>
    </section>
  );
}

export default Home;
