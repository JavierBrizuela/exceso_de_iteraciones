import axios from "axios";

export async function signUp(params) {
  const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
    email: params.email,
    first_name: params.nombre,
    last_name: params.apellido,
    username: params.username,
    password: params.password,
  });

  return response.data;
}

export async function signIn(params) {
  const response = await axios.post("http://127.0.0.1:8000/api/login/", {
    email: params.email,
    password: params.password,
  });

  return response.data;
}
