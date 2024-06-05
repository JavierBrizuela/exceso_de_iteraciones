import "./ProjectDetails.css";

function Details() {
  return (
    <div className="project-wrapper">
      <div className="project-title">
        <div className="project-title-shadow">
          <h1 className="project-title-text">Detalles del proyecto</h1>
        </div>
      </div>
      <div className="project-tags-type-difficulty">
        <span className="project-tag project-details-type">Educación</span>
        <span className="project-tag project-details-difficulty">Principiante</span>
      </div>
      <div className="project-tags-languages-status">
        <div className="project-languages">
          <span className="project-tag project-details-language">JavaScript</span>
          <span className="project-tag project-details-language">Python</span>
        </div>
        <span className="project-tag project-details-status">En proceso</span>
      </div>
      <div className="description">
        <h3 className="project-info">Descripción</h3>
        <div className="description-text">Descripción bla bla bla</div>
      </div>
      <div className="repository">
        <h3 className="project-info">Repositorio</h3>
        <div className="repository-text">URL DEL REPO</div>
      </div>
      <div className="project-info-members">
        <h3 className="project-info">Participantes</h3>
        <div className="project-team">
          <span className="project-member-team">usuario1</span>
          <span className="project-member-team">usuario2</span>
          <span className="project-member-team">usuario3</span>
        </div>
      </div>
      <div className="request">
        <h3 className="request-join">¡Únete al proyecto!</h3>
        <button className="button-request-join">Solicitar unirse</button>
      </div>
    </div>
  );
}

export default Details;
