import { createBrowserRouter } from "react-router";
import Welcome from "./pages/Welcome";
import Surat from "./pages/Surat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/surat",
    element: <Surat />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
