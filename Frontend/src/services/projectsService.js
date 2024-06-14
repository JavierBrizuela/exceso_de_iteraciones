const projects = [
  {
    id: 1,
    title: "uno",
    type: "educacion",
    difficulty: "beginner",
    languages: ["JavaScript", "TypeScript"],
    created_by: "PepitoRubio",
    actual_status: "waiting",
    repository: "https://blabla.com",
  },
  {
    id: 2,
    title: "dos",
    type: "finanza",
    difficulty: "intermediate",
    languages: ["JavaScript", "TypeScript"],
    created_by: "OtroUsuario",
    actual_status: "finished",
    repository: "https://blabla2.com",
  },
  {
    id: 3,
    title: "tres",
    type: "e_commerce",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by: "OtroUsuarioTres",
    actual_status: "in_progress",
    repository: "https://blabla3.com",
  },
  {
    id: 4,
    title: "cuatro",
    type: "machine_learning",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by: "OtroUsuarioCuatro",
    actual_status: "cancelled",
    repository: "https://blabla4.com",
  },
  {
    id: 5,
    title: "cinco",
    type: "otros",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by: "OtroUsuarioCinco",
    actual_status: "cancelled",
    repository: "https://blabla5.com",
  },
  {
    id: 6,
    title: "seis",
    type: "otros",
    difficulty: "advanced",
    languages: ["JavaScript", "TypeScript"],
    created_by: "OtroUsuarioSeis",
    actual_status: "cancelled",
    repository: "https://blabla6.com",
  },
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((project) => project.id === id);
}
