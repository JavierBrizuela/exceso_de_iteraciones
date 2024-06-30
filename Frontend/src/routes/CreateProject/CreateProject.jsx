import { useContext } from "react";

import { useForm, useFieldArray } from "react-hook-form";
import { DIFFICULTY_LEVEL, FRAMEWORKS } from "../../constants/project";
import "./CreateProject.css";
import { createProject } from "../../services/projectsService";
import { AccessContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function CreateProject() {
  const { access } = useContext(AccessContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const {
    fields: participantFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "participants",
  });

  const frameworksList = Object.values(FRAMEWORKS);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await createProject(data, access);

      toast.success("¡Has creado el proyecto con éxito!");
      navigate("/");
    } catch (error) {
      toast.error("El proyecto no ha podido crearse: " + (error || "Error desconocido"));
    }
  };

  const optionsDifficulty = [
    { value: "", label: "Selecciona una opción" },
    ...Object.entries(DIFFICULTY_LEVEL).map(([key, value]) => ({ value: key, label: value })),
  ];

  const optionsType = [
    { value: "", label: "Selecciona una opción" },
    { value: "educacion", label: "Educación" },
    { value: "e_commerce", label: "E-commerce" },
    { value: "machine_learning", label: "Machine learning" },
  ];

  const addParticipant = () => {
    append();
  };

  const removeParticipant = (index) => () => {
    remove(index);
  };

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
                <h3>Frameworks:</h3>
                {frameworksList.map((framework, index) => (
                  <div key={index}>
                    <input type="checkbox" {...register(`frameworks.${framework}`)} />
                    {framework}
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
                  {participantFields.map((participant, index) => (
                    <div key={participant.id} className="new-new-participant">
                      <input
                        key={participant.id}
                        className="new-project-member-team"
                        type="text"
                        {...register(`participants.${index}.value`)}
                      />
                      <button
                        type="button"
                        onClick={removeParticipant(index)}
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
