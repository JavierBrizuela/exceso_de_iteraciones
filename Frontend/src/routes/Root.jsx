import { Outlet } from "react-router-dom";
import Error404 from "./Error404/Error404";

function Root() {
  return (
    <main>
      {/*<h1>Hello world!</h1>
    <Outlet />  */} 
      <Error404 />
    </main>
  );
}

export default Root;
