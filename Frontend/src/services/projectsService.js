const projects = [
  {
    id: 1,
    title: "Proyecto uno",
    type: "educacion",
    difficulty: "beginner",
    languages: ["JavaScript", "TypeScript"],
    created_by: "PepitoRubio",
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
    created_by: "OtroUsuario",
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
    created_by: "OtroUsuarioTres",
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
    created_by: "OtroUsuarioCuatro",
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
    created_by: "OtroUsuarioCinco",
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
    created_by: "OtroUsuarioSeis",
    actual_status: "cancelled",
    repository: "https://blabla6.com",
    members: ["UsuarioSara", "UsuarioRafa", "UsuarioAntonio"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export async function getProjects(token) {
  const response = await fetch("http://127.0.0.1:8000/api/projects/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const projects = await response.json();

  return projects;
}

export function getProject(id) {
  return projects.find((project) => project.id === id);
}
