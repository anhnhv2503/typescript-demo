import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Login from "./components/Login/Login";
import Home from "./components/pages/Home";
import AuthRoute from "./routes/AuthRoute";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Profile from "./components/pages/Profile";
import { Toaster } from "react-hot-toast";
import Refresh from "./components/pages/Refresh";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      element: <AuthRoute />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/refresh",
              element: <Refresh />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
