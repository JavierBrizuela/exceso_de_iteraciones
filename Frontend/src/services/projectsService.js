import { FRAMEWORKS as FRAMEWORKS } from "../constants/project";

const projects = [
  {
    id: 1,
    title: "Proyecto uno",
    type: "educacion",
    difficulty: "beginner",
    languages: ["JavaScript", "TypeScript"],
    created_by_username: "PepitoRubio",
    actual_status: "waiting",
    repository: "https://blabla.com",
    members: ["UsuarioJuan", "UsuarioPaco"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Proyecto dos",
    type: "finanza",
    difficulty: "intermediate",
    languages: ["JavaScript", "TypeScript"],
    created_by_username: "OtroUsuario",
    actual_status: "finished",
    repository: "https://blabla2.com",
    members: ["UsuarioAna", "UsuarioBanana", "UsuarioRafa", "UsuarioAntonio", "UsuarioLola"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Proyecto tres",
    type: "e_commerce",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by_username: "OtroUsuarioTres",
    actual_status: "in_progress",
    repository: "https://blabla3.com",
    members: ["UsuarioRodolfo", "UsuarioLola"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Proyecto cuatro",
    type: "machine_learning",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by_username: "OtroUsuarioCuatro",
    actual_status: "cancelled",
    repository: "https://blabla4.com",
    members: ["UsuarioAlfonso", "UsuarioMaría", "UsuarioRafa", "UsuarioAntonio"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    title: "Proyecto cinco",
    type: "otros",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by_username: "OtroUsuarioCinco",
    actual_status: "cancelled",
    repository: "https://blabla5.com",
    members: ["UsuarioRosa", "UsuarioCarolina", "UsuarioAntonio"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    title: "Proyecto seis",
    type: "otros",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by_username: "OtroUsuarioSeis",
    actual_status: "cancelled",
    repository: "https://blabla6.com",
    members: ["UsuarioSara", "UsuarioRafa", "UsuarioAntonio"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export function getFakeProjects() {
  return projects;
}

export async function getProjects(token) {
  const response = await fetch("http://127.0.0.1:8000/api/projects/?page_size=100", {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const projects = await response.json();

  return projects;
}

export async function getProject(id, token) {
  const response = await fetch(`http://127.0.0.1:8000/api/projects/${id}/`, {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const project = await response.json();

  return project;
}

export async function createProject(params, token) {
  const projectBody = {
    title: params.title,
    type: params.type,
    description: params.description,
    difficulty: params.difficulty,
    repository: params.difficulty,
    actual_status: 0,
  };

  const projectResponse = await fetch("http://127.0.0.1:8000/api/projects/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify(projectBody),
  });

  if (!projectResponse.ok) {
    throw new Error(projectResponse);
  }

  const newProject = await projectResponse.json();

  const newProjectId = newProject.id;

  const frameworks = Object.entries(params.frameworks)
    .filter(([, val]) => val)
    .map(([key]) => key);

  const frameworkNumbers = frameworks.map(
    (lang) => Object.entries(FRAMEWORKS).find(([, value]) => value === lang)?.[0],
  );

  await Promise.allSettled(
    frameworkNumbers.map((lang) => {
      return fetch(`http://127.0.0.1:8000/api/projects/${newProjectId}/technology/${lang}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        body: JSON.stringify(projectBody),
      });
    }),
  );

  console.log(newProject);
}
