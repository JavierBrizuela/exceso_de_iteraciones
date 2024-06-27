import { useState } from "react";

import { useForm } from "react-hook-form";
import "./CreateProject.css";

function CreateProject() {
  const [participants, setParticipants] = useState([]);
  const [numParticipants, setNumParticipants] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    console.log(data);
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

  const addParticipant = () => {
    setNumParticipants((prev) => prev + 1);
    setParticipants((prev) => [...prev, numParticipants]);
  };

  /* const removeParticipant = (value) => {
    setParticipants((prev) => prev.filter((p) => p !== value));
  }; */

  return (
    <div className="new-project-wrapper">
      <div className="new-project-title">
        <div className="new-project-title-shadow">
          <h1 className="new-project-title-text">Nuevo proyecto</h1>
        </div>
      </div>
      <form className="new-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="new-project-username-info">
          <label className="new-project-info">Nombre del proyecto</label>
          <input
            className="new-project-tag-created-by"
            type="text"
            {...register("title", { required: "El nombre del proyecto es obligatorio" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="new-project-username-info">
          <label className="new-project-info">Tu rol</label>
          <input
            className="new-project-tag-created-by"
            type="text"
            {...register("creatorRole", { required: "Tu rol es obligatorio" })}
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
                    {...register("repository")}
                  />
                </div>
              </div>
              <div className="new-input">
                <h3 className="new-project-info">Dificultad</h3>
                <select
                  className="new-desplegable-select"
                  {...register("difficulty", { required: "La dificultad es obligatoria" })}>
                  {optionsDifficulty.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.difficulty && <span>{errors.difficulty.message}</span>}
              </div>
              <div className="new-input">
                <h3 className="new-project-info">Tipo de proyecto</h3>
                <select
                  className="new-desplegable-select"
                  {...register("type", { required: "El tipo es obligatorio" })}>
                  {optionsType.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.type && <span>{errors.type.message}</span>}
              </div>
              <div className="new-input">
                <h3>Lenguajes:</h3>
                {languagesList.map((lang, index) => (
                  <div key={index}>
                    <input type="checkbox" {...register(`languages.${lang}`)} />
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
                    onClick={addParticipant}
                    className="new-button-request-join new-add">
                    +
                  </button>
                  {participants.map((participant, index) => (
                    <div key={index} className="new-new-participant">
                      <input
                        className="new-project-member-team"
                        type="text"
                        {...register(`participants.nombre-${participant}`)}
                      />
                      {/* <button
                        type="button"
                        onClick={() => removeParticipant(index)}
                        className="new-button-request-join">
                        X
                      </button> */}
                    </div>
                  ))}
                </div>
              </div>
              <div className="new-input">
                <h3 className="new-project-info">Descripción</h3>
                <textarea
                  className="new-description-text"
                  type="text"
                  {...register("description")}
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
