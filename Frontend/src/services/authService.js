export async function signUp(params) {
  const response = await fetch("http://127.0.0.1:8000/api/signup/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: params.email,
      first_name: params.nombre,
      last_name: params.apellido,
      username: params.username,
      password: params.password,
    }),
  });

  return await response.json();
}

export async function signIn(params) {
  const response = await fetch("http://127.0.0.1:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Something went wrong");
  }

  return await response.json();
}
