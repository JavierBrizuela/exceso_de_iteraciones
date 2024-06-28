import "./Home.css";
import Card from "./components/Card";
import { getProjects } from "../../services/projectsService";
import { useContext, useState, useEffect, useCallback } from "react";
import { AccessContext } from "../../App";
import { Link } from "react-router-dom";

function Home() {
  const context = useContext(AccessContext);

  const [projects, setProjects] = useState();

  const fetchProjects = useCallback(async () => {
    const apiProjects = await getProjects(context.access);

    setProjects(apiProjects.results);
  }, [context.access]);

  useEffect(() => {
    if (!projects) {
      fetchProjects();
    }
  }, [fetchProjects, projects]);

  return (
    <section className="projects-home">
      <div className="projects">
        <h1 className="projects-title">Descubre algunos de estos proyectos</h1>
        <Link className="create-project-button" to={"/createproject"}>
          Crea un nuevo proyecto
        </Link>
        <div className="project-list">
          {projects &&
            projects.map((project) => (
              <Card
                key={project.id}
                id={project.id}
                title={project.title}
                type={project.type}
                difficulty={project.difficulty}
                languages={project.languages}
                created_by={project.created_by_username}
                actual_status={project.actual_status}
              />
            ))}
        </div>
      </div>
      <div className="create-account-home">
        <div className="account-home-text">
          <div className="account-home-principal-text">
            <h2>¿Te gustaría unirte a algún proyecto?</h2>
            <h2>¿O preferirías crear el tuyo propio?</h2>
          </div>
          <p className="account-home-secondary-text">¡Únete a la comunidad Develmatch!</p>
        </div>
        <Link className="account-home-button" to={"/signup"}>
          Crea tu cuenta gratis
        </Link>
      </div>
    </section>
  );
}

export default Home;
