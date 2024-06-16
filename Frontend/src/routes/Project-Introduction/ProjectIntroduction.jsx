/* eslint-disable prettier/prettier */
import './PorjectIntroduction.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ProjectIntroduction() {
  const [formData, setFormData] = useState({
    title: '',
    rolUser: '',
    type: '',
    difficulty: '',
    languages: [],
    description: '',
    repository: '',
    participants: [{ nombre: '' }]
  });
  const [error, setError] = useState('');
  const languagesList = [
    'JavaScript', 'Python', 'C', 'C++', 'Java', 'C#', 'SQL', 'Go', 
    'PHP', 'Visual Basic', 'Fortran', 'Otros'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes('-')) {
      const [field, index] = name.split('-');
      const newParticipants = formData.participants.map((participant, i) =>
        i === parseInt(index) ? { ...participant, [field]: value } : participant
      );
      setFormData({
        ...formData,
        participants: newParticipants
      });
    } else if (name === 'languages') {
      const newLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter(lang => lang !== value);

      setFormData({
        ...formData,
        languages: newLanguages
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.languages.length === 0) {
      setError('Debes seleccionar al menos un lenguaje.');
      toast.error('Debes seleccionar al menos un lenguaje.');
    } else {
      setError('');
      toast.success('Formulario enviado correctamente');
      // Aquí puedes manejar el envío del formulario (por ejemplo, enviar los datos a una API)
      console.log('Datos del formulario:', formData);
    }
  };

  const optionsDifficulty = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'principiante', label: 'Principiante' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'avanzado', label: 'Avanzado' }
  ];

  const optionsType = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'educacion', label: 'Educación' },
    { value: 'e_commerce', label: 'E-commerce' },
    { value: 'machine_learning', label: 'Machine learning' },
    { value: 'otros_tipos', label: 'Otros tipos' },
  ];

  const agregarUsuario = () => {
    setFormData({
      ...formData,
      participants: [...formData.participants, { nombre: '' }]
    });
  };

  const eliminarUsuario = (index) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="project-wrapper">
      <div className="project-title">
        <div className="project-title-shadow">
          <h1 className="project-title-text">Nuevo proyecto</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="project-username-info">
          <label className="project-info">Nombre del proyecto</label>
          <input
            className="project-tag-created-by"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="project-username-info">
          <label className="project-info">Tu rol</label>
          <input
            className="project-tag-created-by"
            type="text"
            id="rolUser"
            name="rolUser"
            value={formData.rolUser}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="project-basic-info-center">
          <div className="project-basic-info">
            <span className="separator-vertical"></span>
            <div className="project-repo-members">
              <div className="repository">
                <h3 className="project-info">Repositorio</h3>
                <div className="url-wrapper">
                  <input
                    className="project-member-team"
                    type="text"
                    id="repository"
                    name="repository"
                    value={formData.repository}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div>
                <h3 className="project-info">Dificultad</h3>
                <select
                  className="desplegable-select"
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required 
                >
                  {optionsDifficulty.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h3 className="project-info">Tipo de proyecto</h3>
                <select
                  className="desplegable-select"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required 
                >
                  {optionsType.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
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
              <span className="separator-horizontal"></span>
              <div className="project-info-members">
                <div className="project-team">
                  <h3 className="project-info">Participantes</h3>
                  <button type="button" onClick={agregarUsuario} className="button-request-join">
                    +
                  </button>
                  {formData.participants.map((participant, index) => (
                    <div key={index} className="new-participant">
                      <input
                        className="project-member-team"
                        type="text"
                        id={`user${index}`}
                        name={`nombre-${index}`}
                        value={participant.nombre}
                        onChange={handleChange}
                        required 
                      />
                      <button type="button" onClick={() => eliminarUsuario(index)} className="button-request-join">
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="proyectDescription">
                <h3 className="project-info">Descripción</h3>
                <textarea
                  className="description-text"
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className="button-request-join">Crear Proyecto</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


/* eslint-disable prettier/prettier */
/*import './PorjectIntroduction.css';
import { useState } from 'react';

export default function ProjectIntroduction() {
  const [formData, setFormData] = useState({
    title: '',
    rolUser: '',
    type: '',
    difficulty: '',
    languages: [],
    description: '',
    repository: '',
    participants: [{ nombre: '' }]
  });

  const languagesList = [
    'JavaScript', 'Python', 'C', 'C++', 'Java', 'C#', 'SQL', 'Go', 
    'PHP', 'Visual Basic', 'Fortran', 'Otros'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes('-')) {
      const [field, index] = name.split('-');
      const newParticipants = formData.participants.map((participant, i) =>
        i === parseInt(index) ? { ...participant, [field]: value } : participant
      );
      setFormData({
        ...formData,
        participants: newParticipants
      });
    } else if (name === 'languages') {
      const newLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter(lang => lang !== value);

      setFormData({
        ...formData,
        languages: newLanguages
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  const optionsDifficulty = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'principiante', label: 'Principiante' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'avanzado', label: 'Avanzado' }
  ];

  const optionsType = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'educacion', label: 'Educación' },
    { value: 'e_commerce', label: 'E-commerce' },
    { value: 'machine_learning', label: 'Machine learning' },
    { value: 'otros_tipos', label: 'Otros tipos' },
  ]

  const agregarUsuario = () => {
    setFormData({
      ...formData,
      participants: [...formData.participants, { nombre: '' }]
    });
  };

  const eliminarUsuario = (index) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="project-wrapper">
      <div className="project-title">
        <div className="project-title-shadow">
          <h1 className="project-title-text">Nuevo proyecto</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="project-username-info">
          <label className="project-info">Nombre del proyecto</label>
          
          <input
            className="project-tag-created-by"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="project-username-info">
          <label className="project-info">Tu rol</label>
          
          <input
            className="project-tag-created-by"
            type="text"
            id="rolUser"
            name="rolUser"
            value={formData.rolUser}
            onChange={handleChange}
          />
        </div>
        <div className="project-basic-info-center">
          <div className="project-basic-info">
            <span className="separator-vertical"></span>
            <div className="project-repo-members">
              <div className="repository">
                <h3 className="project-info">Repositorio</h3>
                <div className="url-wrapper">
                  <input
                    className="repository-text"
                    type="text"
                    id="repository"
                    name="repository"
                    value={formData.repository}
                    onChange={handleChange}
                    
                  />
                 
                </div>
              </div>
              <div>
              <h3 className="project-info">Dificultad</h3>
              <select
                   className="desplegable-select"
                    id="difficulty"
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleChange}
      >
        {optionsDifficulty.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
              </div>
              <div>
              <h3 className="project-info">Tipo de proyecto</h3>
              <select
                   className="desplegable-select"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
      >
        {optionsType.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
              </div> 
      <div>
      <div>
        <label>Lenguajes:</label>
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
      </div>
          
             
              <span className="separator-horizontal"></span>
              <div className="project-info-members">
                <div className="project-team">
                <h3 className="project-info">Participantes</h3>
                  <button type="button" onClick={agregarUsuario} className="button-request-join" >
                    +
                  </button>
                  {formData.participants.map((participant, index) => (
                    <div key={index} className="new-participant">
                      <input
                        className="project-member-team"
                        type="text"
                        id={`user${index}`}
                        name={`nombre-${index}`}
                        value={participant.nombre}
                        onChange={handleChange}
                      />
                      <button type="button" onClick={() => eliminarUsuario(index)} className="button-request-join">
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="proyectDescription">
              <h3 className="project-info">Descripcion</h3>
              <input
                        className="description-text"
                        type="text"
                        id="description"
                        name="description"
                        
                        onChange={handleChange}
                      />
              </div>
              <button type="submit" className="button-request-join">Crear Proyecto</button>
            </div>
          </div>
        </div>
      </form>




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
    </div>
  );
}*/
