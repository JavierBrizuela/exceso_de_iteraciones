import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Signup from "./routes/Signup";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
