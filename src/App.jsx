
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/page/Registration";
import Login from "./components/page/Login"


function App() {

  const router = createBrowserRouter([
    {
      path: "/registration",
      element: <Registration></Registration>,
    },

    {
      path: "/login",
      element: <Login></Login> ,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
