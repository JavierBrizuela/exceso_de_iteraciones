import PropTypes from "prop-types";

function Input({ id, registerProps, type, placeholder, errorMessage, icon }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>
        <i className={`input-icon ${icon}`}></i>
      </label>
      <input type={type} placeholder={placeholder} {...registerProps} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  registerProps: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  icon: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  errorMessage: "",
  icon: "",
};

export default Input;
