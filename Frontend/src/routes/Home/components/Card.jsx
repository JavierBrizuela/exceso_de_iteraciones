import "./Card.css";

function Card({ id, title, type, difficulty, languages, created_by, actual_status }) {
  return (
    <div className="card-wrapper">
      <div className="card-info">
        <h3 className="card-title">Título del proyecto</h3>
        <div className="card-division-info">
          <div className="first-division-info">
            <span className="tag project-type">Educación</span>
            <span className="tag project-difficulty">Principiante</span>
          </div>
          <div className="second-division-info">
            <span className="project-languages">JavaScript</span>
            <span className="project-languages">Python</span>
            <span className="project-languages">C</span>
            <span className="project-languages">C++</span>
            <span className="project-languages">Java</span>
            <span className="project-languages">C#</span>
            <span className="project-languages">SQL</span>
            <span className="project-languages">Go</span>
            <span className="project-languages">PHP</span>
            <span className="project-languages">Visual Basic</span>
            <span className="project-languages">Fortran</span>
            <span className="project-languages">Otros</span>
          </div>
          <div className="third-division-info">
            <span className="tag project-actual-status">En progreso</span>
            <span className="tag project-created-by">PepitoRubio</span>
          </div>
          <button className="card-more-info">+ Info</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
