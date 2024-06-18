import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import { getProject } from "../../services/projectsService";

function Details() {
  const params = useParams();
  const projectId = parseInt(params.projectId);
  const project = getProject(projectId);
  console.log(project, params.projectId);

  if (!project) {
    // TODO: Redirigir a la página error 404
    return <h1>Project not found</h1>;
  }

  const {
    title,
    type,
    difficulty,
    languages,
    created_by,
    actual_status,
    repository,
    description,
    members,
  } = project;

  return (
    <div className="project-wrapper">
      <div className="project-title">
        <div className="project-title-shadow">
          <h1 className="project-title-text">{title}</h1>
        </div>
      </div>
      <div className="project-username-info">
        <label>
          <i className="created-by-user-icon"></i>
        </label>
        <span className="project-tag-created-by">{created_by}</span>
      </div>
      <div className="project-basic-info-center">
        <div className="project-basic-info">
          <div className="tags-wrapper">
            <div className="project-tags-type-difficulty">
              <span className="project-tag project-details-type">{type}</span>
              <span className="project-tag project-details-status">{actual_status}</span>
              <span className="project-tag project-details-difficulty">{difficulty}</span>
            </div>
            <div className="project-tags-languages">
              {languages.map((language) => (
                <span key={language} className="project-tag project-details-language">
                  {language}
                </span>
              ))}
            </div>
          </div>
          <span className="separator-vertical"></span>
          <div className="project-repo-members">
            <div className="repository">
              <h3 className="project-info">Repositorio</h3>
              <div className="url-wrapper">
                <div className="repository-text">{repository}</div>
                <label className="copy-url-icon-wrapper">
                  <i className="copy-url-icon"></i>
                </label>
              </div>
            </div>
            <span className="separator-horizontal"></span>
            <div className="project-info-members">
              <h3 className="project-info">Participantes</h3>
              <div className="project-team">
                {members.map((member) => (
                  <span key={member} className="project-member-team">
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="separator-horizontal"></span>
      <div className="description">
        <h3 className="project-info">Descripción</h3>
        <div className="description-text">{description}</div>
      </div>
      <span className="separator-horizontal"></span>
      <div className="request">
        <h3 className="request-join">¡Únete al proyecto!</h3>
        <button className="button-request-join">Solicitar unirse</button>
      </div>
    </div>
  );
}

export default Details;
