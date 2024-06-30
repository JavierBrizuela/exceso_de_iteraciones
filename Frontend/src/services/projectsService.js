import { FRAMEWORKS } from "../constants/project";

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

  // Crea el proyecto
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

  const frameworks = Object.entries(params.frameworks)
    .filter(([, val]) => val)
    .map(([key]) => key);

  const frameworkNumbers = frameworks.map(
    (lang) => Object.entries(FRAMEWORKS).find(([, value]) => value === lang)?.[0],
  );

  // añade los frameworks al proyecto
  await Promise.allSettled(
    frameworkNumbers.map((framework) => {
      return fetch(`http://127.0.0.1:8000/api/projects/${newProject.id}/technology/${framework}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });
    }),
  );

  // Añade al usuario como participante
  await fetch(`http://127.0.0.1:8000/api/projects/${newProject.id}/member/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
}
