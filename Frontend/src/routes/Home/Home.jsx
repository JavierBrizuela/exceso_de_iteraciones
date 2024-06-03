import "./Home.css";
//import Card from "./components/Card";
//import { useState, useEffect } from "react";

function Home() {
  /*const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/projects/${id}`);
        const data = await response.json();
        setProjects([data]);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    const fetchFirstProjectId = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects/");
        const data = await response.json();
        if (data.length > 0) {
          const firstProjectId = data[0].id;
          fetchProject(firstProjectId);
        }
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };

    fetchFirstProjectId();
  }, []);*/

  return (
    <section className="projects-home">
      <div className="projects">
        <h1 className="projects-title">Descubre algunos de estos proyectos</h1>
        <div className="project-list">
          {/*projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              type={project.type}
              difficulty={project.difficulty}
              languages={project.languages}
              created_by={project.created_by}
              actual_status={project.actual_status}
            />
          ))*/}
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
        <button className="account-home-button">Crea tu cuenta gratis</button>
      </div>
    </section>
  );
}

export default Home;
