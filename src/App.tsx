// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { Admin } from "./pages/admin/admin";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard />
      </Private>
    )
  },
  {
    path: "/admin",
    element: (
      <Private role='ADMIN'>
        <Admin />
      </Private>
    )
  }
]);

export { router };
