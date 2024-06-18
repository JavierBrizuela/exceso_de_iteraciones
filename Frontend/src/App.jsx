import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Signup from "./routes/Signup/Signup";
import Details from "./routes/ProjectDetails/ProjectDetails";
import Signin from "./routes/Signin/Signin";
import { createContext, useState } from "react";

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

  return (
    <>
      <AccessContext.Provider value={{ access, setAccess }}>
        <Toaster />
        <RouterProvider router={router} />
      </AccessContext.Provider>
    </>
  );
}

export default App;
