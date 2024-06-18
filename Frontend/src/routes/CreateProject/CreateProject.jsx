import "./CreateProject.css";
import { useState } from "react";
import toast from "react-hot-toast";

function CreateProject() {
  const [formData, setFormData] = useState({
    title: "",
    rolUser: "",
    type: "",
    difficulty: "",
    languages: [],
    description: "",
    repository: "",
    participants: [{ nombre: "" }],
  });
  const [error, setError] = useState("");
  const languagesList = [
    "JavaScript",
    "Python",
    "C",
    "C++",
    "Java",
    "C#",
    "SQL",
    "Go",
    "PHP",
    "Visual Basic",
    "Fortran",
    "Otros",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes("-")) {
      const [field, index] = name.split("-");
      const newParticipants = formData.participants.map((participant, i) =>
        i === parseInt(index) ? { ...participant, [field]: value } : participant,
      );
      setFormData({
        ...formData,
        participants: newParticipants,
      });
    } else if (name === "languages") {
      const newLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter((lang) => lang !== value);

      setFormData({
        ...formData,
        languages: newLanguages,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.languages.length === 0) {
      setError("Debes seleccionar al menos un lenguaje.");
      toast.error("Debes seleccionar al menos un lenguaje.");
    } else {
      setError("");
      toast.success("Formulario enviado correctamente");
      // Aquí puedes manejar el envío del formulario (por ejemplo, enviar los datos a una API)
      console.log("Datos del formulario:", formData);
    }
  };

  const optionsDifficulty = [
    { value: "", label: "Selecciona una opción" },
    { value: "principiante", label: "Principiante" },
    { value: "intermedio", label: "Intermedio" },
    { value: "avanzado", label: "Avanzado" },
  ];

  const optionsType = [
    { value: "", label: "Selecciona una opción" },
    { value: "educacion", label: "Educación" },
    { value: "e_commerce", label: "E-commerce" },
    { value: "machine_learning", label: "Machine learning" },
    { value: "otros_tipos", label: "Otros tipos" },
  ];

  const agregarUsuario = () => {
    setFormData({
      ...formData,
      participants: [...formData.participants, { nombre: "" }],
    });
  };

  const eliminarUsuario = (index) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="new-project-wrapper">
      <div className="new-project-title">
        <div className="new-project-title-shadow">
          <h1 className="new-project-title-text">Nuevo proyecto</h1>
        </div>
      </div>
      <form className="new-form" onSubmit={handleSubmit}>
        <div className="new-project-username-info">
          <label className="new-project-info">Nombre del proyecto</label>
          <input
            className="new-project-tag-created-by"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="new-project-username-info">
          <label className="new-project-info">Tu rol</label>
          <input
            className="new-project-tag-created-by"
            type="text"
            id="rolUser"
            name="rolUser"
            value={formData.rolUser}
            onChange={handleChange}
            required
          />
        </div>
        <div className="new-project-basic-info-center">
          <span className="new-separator-horizontal"></span>
          <div className="new-project-basic-info">
            <div className="new-project-repo-members">
              <div className="new-input">
                <h3 className="new-project-info">Repositorio</h3>
                <div className="new-url-wrapper">
                  <input
                    className="new-project-member-team"
                    type="text"
                    id="repository"
                    name="repository"
                    value={formData.repository}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="new-input">
                <h3 className="new-project-info">Dificultad</h3>
                <select
                  className="new-desplegable-select"
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required>
                  {optionsDifficulty.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="new-input">
                <h3 className="new-project-info">Tipo de proyecto</h3>
                <select
                  className="new-desplegable-select"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required>
                  {optionsType.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="new-input">
                <h3>Lenguajes:</h3>
                {languagesList.map((lang, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="languages"
                      value={lang}
                      checked={formData.languages.includes(lang)}
                      onChange={handleChange}
                    />
                    {lang}
                  </div>
                ))}
              </div>
              <span className="new-separator-horizontal"></span>
              <div className="new-project-info-members">
                <div className="new-input">
                  <h3 className="new-project-info">Participantes</h3>
                  <button
                    type="button"
                    onClick={agregarUsuario}
                    className="new-button-request-join new-add">
                    +
                  </button>
                  {formData.participants.map((participant, index) => (
                    <div key={index} className="new-new-participant">
                      <input
                        className="new-project-member-team"
                        type="text"
                        id={`user${index}`}
                        name={`nombre-${index}`}
                        value={participant.nombre}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => eliminarUsuario(index)}
                        className="new-button-request-join">
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="new-input">
                <h3 className="new-project-info">Descripción</h3>
                <textarea
                  className="new-description-text"
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="new-button-request-join">
                Crear Proyecto
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
