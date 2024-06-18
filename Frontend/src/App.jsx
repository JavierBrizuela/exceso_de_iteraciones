import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Root from "./routes/Root";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";
import Details from "./routes/ProjectDetails/ProjectDetails";
import Signin from "./routes/Signin/Signin";
import { createContext, useState, useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "projectdetails",
        element: <Details />,
      },
      {
        path: "projects/:projectId",
        element: <Details />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);

export const AccessContext = createContext();

function App() {
  const localStorageAccess = localStorage.getItem("access");
  console.log(localStorageAccess);
  const [access, setAccess] = useState(localStorageAccess);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (access) {
      fetchUserData(access);
    }
  }, [access]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile-update/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <AccessContext.Provider value={{ access, setAccess, user, setUser }}>
        <Toaster />
        <RouterProvider router={router} />
      </AccessContext.Provider>
    </>
  );
}

export default App;
