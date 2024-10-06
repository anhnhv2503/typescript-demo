import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Login from "./components/Login/Login"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login"/>
    },
    {
      path: "/login",
      element: <Login/>
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
