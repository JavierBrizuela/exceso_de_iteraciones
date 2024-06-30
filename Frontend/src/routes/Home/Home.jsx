import "./Home.css";
import Card from "./components/Card";
import { getProjects } from "../../services/projectsService";
import { useContext, useState, useEffect } from "react";
import { AccessContext } from "../../App";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const context = useContext(AccessContext);

  const [projects, setProjects] = useState([]);

  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    getProjects(1)
      .then((data) => setProjects(data.results))
      .catch((err) => console.error(err.message));
  }, []);

  const fetchMoreData = () => {
    getProjects(index)
      .then((res) => {
        setProjects((prevs) => [...prevs, ...res.results]);

        res.results.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <section className="projects-home">
      <div className="projects">
        <h1 className="projects-title">Descubre algunos de estos proyectos</h1>
        {context.user && (
          <Link className="create-project-button" to={"/createproject"}>
            Crea un nuevo proyecto
          </Link>
        )}
        <InfiniteScroll
          dataLength={projects.length}
          next={fetchMoreData}
          hasMore={hasMore}
          scrollThreshold={0.8}>
          <div className="project-list">
            {projects &&
              projects.map((project) => (
                <Card
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  type={project.type}
                  difficulty={project.difficulty}
                  technologies={project.technology}
                  created_by={project.created_by_username}
                  actual_status={project.actual_status}
                />
              ))}
          </div>
        </InfiniteScroll>
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
