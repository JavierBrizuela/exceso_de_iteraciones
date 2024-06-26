import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { DIFFICULTY_LEVEL, STATUS } from "../../../constants/project";

import "./Card.css";

function Card({ id, title, type, difficulty, languages, created_by, actual_status }) {
  const langs = languages || [];

  return (
    <div className="card-wrapper" id={id}>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="card-division-info">
          <div className="first-division-info">
            <span className="tag project-type">{type}</span>
            <span className="tag project-difficulty">{DIFFICULTY_LEVEL[difficulty]}</span>
          </div>
          <div className="second-division-info">
            {langs.map((language, index) => (
              <span key={index} className="project-languages">
                {language}
              </span>
            ))}
          </div>
          <div className="third-division-info">
            <span className="tag project-actual-status">{STATUS[actual_status]}</span>
            <span className="tag project-created-by">{created_by}</span>
          </div>
          <Link to={`/projects/${id}`} className="card-more-info">
            + Info
          </Link>
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
  languages: PropTypes.arrayOf(PropTypes.string),
  created_by: PropTypes.string,
  actual_status: PropTypes.string.isRequired,
};

export default Card;
