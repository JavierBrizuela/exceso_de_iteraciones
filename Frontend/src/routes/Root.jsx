import { Outlet } from "react-router-dom";

function Root() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Outlet />
    </main>
  );
}

export default Root;
