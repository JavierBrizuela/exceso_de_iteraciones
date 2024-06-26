import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";
import { getProject } from "../../services/projectsService";
import { toast } from "react-hot-toast";
import { useContext, useState, useCallback, useEffect } from "react";
import { AccessContext } from "../../App";
import { DIFFICULTY_LEVEL, STATUS } from "../../constants/project";

function Details() {
  const params = useParams();
  const { access } = useContext(AccessContext);
  const [project, setProject] = useState();

  const fetchProjects = useCallback(async () => {
    const apiProject = await getProject(params.projectId, access);

    setProject(apiProject);
  }, [access, params.projectId]);

  useEffect(() => {
    if (!project) {
      fetchProjects();
    }
  }, [fetchProjects, project]);

  if (!project) {
    return <Link to="/*" />;
  }

  const {
    title,
    type,
    difficulty,
    technology: projectTechnology,
    created_by,
    actual_status,
    repository,
    description,
    team_members: projectMembers,
  } = project;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("¡Repositorio copiado en tu clipboard!");
      },
      () => {
        toast.error("El repositorio no ha podido copiarse :(");
      },
    );
  };

  const technologies = projectTechnology || [];
  const members = projectMembers || [];

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
        <span className="project-tag-created-by">{created_by.username}</span>
      </div>
      <div className="project-basic-info-center">
        <div className="project-basic-info">
          <div className="tags-wrapper">
            <div className="project-tags-type-difficulty">
              <span className="project-tag project-details-type">{type}</span>
              <span className="project-tag project-details-status">{STATUS[actual_status]}</span>
              <span className="project-tag project-details-difficulty">
                {DIFFICULTY_LEVEL[difficulty]}
              </span>
            </div>
            <div className="project-tags-languages">
              {technologies.map((technology) => (
                <span key={technology.id} className="project-tag project-details-language">
                  {technology.name}
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
                <label
                  className="copy-url-icon-wrapper"
                  onClick={() => copyToClipboard(repository)}>
                  <i className="copy-url-icon"></i>
                </label>
              </div>
            </div>
            <span className="separator-horizontal"></span>
            <div className="project-info-members">
              <h3 className="project-info">Participantes</h3>
              <div className="project-team">
                {members.map((member) => (
                  <span key={member.id} className="project-member-team">
                    {member.username}
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
        <a href="mailto:develmatch@gmail.com">
          <button className="button-request-join">Solicitar unirse</button>
        </a>
      </div>
    </div>
  );
}

export default Details;
