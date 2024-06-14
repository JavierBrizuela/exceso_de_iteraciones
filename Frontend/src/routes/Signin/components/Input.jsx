import PropTypes from "prop-types";

function Input({ id, registerProps, type, placeholder, errorMessage, icon }) {
  const InputClass = () => {
    if (errorMessage) {
      return "input-invalid";
    }

    return "";
  };

  return (
    <div className="input-wrapper">
      <div className="input-right">
        <label htmlFor={id} className={InputClass()}>
          <i className={`input-icon ${icon}`}></i>
        </label>
        <input type={type} placeholder={placeholder} {...registerProps} className={InputClass()} />
      </div>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
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
