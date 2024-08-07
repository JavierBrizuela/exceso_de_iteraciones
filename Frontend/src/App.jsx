import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Root from "./routes/Root";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";
import Details from "./routes/ProjectDetails/ProjectDetails";
import Signin from "./routes/Signin/Signin";
import CreateProject from "./routes/CreateProject/CreateProject";
import { createContext, useState, useEffect, useCallback } from "react";
import Error404 from "./routes/Error404/Error404";
import { getUserData, signInRefresh } from "./services/authService";

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
        path: "signin",
        element: <Signin />,
      },
      {
        path: "createproject",
        element: <CreateProject />,
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
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

export const AccessContext = createContext();

function App() {
  const localStorageAccess = localStorage.getItem("access");
  const localStorageRefresh = localStorage.getItem("refresh");
  const [access, setAccess] = useState(localStorageAccess);
  const [refresh, setRefresh] = useState(localStorageRefresh);
  const [user, setUser] = useState();

  const fetchUserData = useCallback(
    async (token) => {
      try {
        const userData = await getUserData(token);

        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        const newAccessData = await signInRefresh(refresh);

        localStorage.setItem("access", newAccessData.access);
        setAccess(newAccessData.access);
      }
    },
    [refresh],
  );

  useEffect(() => {
    if (access && !user) {
      fetchUserData(access);
    }
  }, [access, fetchUserData, user]);

  return (
    <>
      <AccessContext.Provider value={{ access, setAccess, user, setUser, refresh, setRefresh }}>
        <Toaster />
        <RouterProvider router={router} />
      </AccessContext.Provider>
    </>
  );
}

export default App;
