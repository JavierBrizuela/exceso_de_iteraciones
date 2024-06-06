import "./Card.css";
import PropTypes from "prop-types";

function Card({ id, title, type, difficulty, languages, created_by, actual_status }) {
  return (
    <div className="card-wrapper" id={id}>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="card-division-info">
          <div className="first-division-info">
            <span className="tag project-type">{type}</span>
            <span className="tag project-difficulty">{difficulty}</span>
          </div>
          <div className="second-division-info">
            {languages.map((language, index) => (
              <span key={index} className="project-languages">
                {language}
              </span>
            ))}
          </div>
          <div className="third-division-info">
            <span className="tag project-actual-status">{actual_status}</span>
            <span className="tag project-created-by">{created_by}</span>
          </div>
          <button className="card-more-info">+ Info</button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  created_by: PropTypes.string.isRequired,
  actual_status: PropTypes.string.isRequired,
};

export default Card;