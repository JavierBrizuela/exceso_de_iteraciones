import axios from "axios";
import { FRAMEWORKS } from "../constants/project";

export async function getProjects(page, pageSize = 50) {
  const response = await axios.get("http://127.0.0.1:8000/api/projects/", {
    params: {
      page,
      page_size: pageSize,
    },
  });

  return response.data;
}

export async function getProject(id) {
  const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}/`);

  return response.data;
}

export async function createProject(params, token) {
  // Crea el proyecto
  const projectResponse = await axios.post(
    "http://127.0.0.1:8000/api/projects/",
    {
      title: params.title,
      type: params.type,
      description: params.description,
      difficulty: params.difficulty,
      repository: params.repository,
      actual_status: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const newProject = projectResponse.data;

  const frameworks = Object.entries(params.frameworks)
    .filter(([, val]) => val)
    .map(([key]) => key);

  const frameworkNumbers = frameworks.map(
    (lang) => Object.entries(FRAMEWORKS).find(([, value]) => value === lang)?.[0],
  );

  // añade los frameworks al proyecto
  await Promise.allSettled(
    frameworkNumbers.map((framework) => {
      return axios.post(
        `http://127.0.0.1:8000/api/projects/${newProject.id}/technology/${framework}`,
        undefined,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    }),
  );

  // Añade al usuario como participante
  await axios.post(`http://127.0.0.1:8000/api/projects/${newProject.id}/member/`, undefined, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
