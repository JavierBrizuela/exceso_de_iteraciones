import "./ProjectDetails.css";

function Details() {
  return (
    <div className="project-wrapper">
      <div className="project-title">
        <div className="project-title-shadow">
          <h1 className="project-title-text">Proyecto de ejemplo</h1>
        </div>
      </div>
      <div className="project-username-info">
        <label>
          <i className="created-by-user-icon"></i>
        </label>
        <span className="project-tag-created-by">PepitoRubio</span>
      </div>
      <div className="project-basic-info-center">
        <div className="project-basic-info">
          <div className="tags-wrapper">
            <div className="project-tags-type-difficulty">
              <span className="project-tag project-details-type">Educación</span>
              <span className="project-tag project-details-status">En proceso</span>
              <span className="project-tag project-details-difficulty">Principiante</span>
            </div>
            <div className="project-tags-languages">
              <span className="project-tag project-details-language">JavaScript</span>
              <span className="project-tag project-details-language">Python</span>
            </div>
          </div>
          <span className="separator-vertical"></span>
          <div className="project-repo-members">
            <div className="repository">
              <h3 className="project-info">Repositorio</h3>
              <div className="url-wrapper">
                <div className="repository-text">URL DEL REPO</div>
                <label className="copy-url-icon-wrapper">
                  <i className="copy-url-icon"></i>
                </label>
              </div>
            </div>
            <span className="separator-horizontal"></span>
            <div className="project-info-members">
              <h3 className="project-info">Participantes</h3>
              <div className="project-team">
                <span className="project-member-team">usuario1</span>
                <span className="project-member-team">usuario2</span>
                <span className="project-member-team">usuario3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="separator-horizontal"></span>
      <div className="description">
        <h3 className="project-info">Descripción</h3>
        <div className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
          tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
          diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
          orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
          Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
          augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui
          ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.
        </div>
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
