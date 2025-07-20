import { createBrowserRouter } from "react-router";
import Welcome from "./pages/Welcome";
import Surat from "./pages/Surat";
import DetailSurat from "./pages/DetailSurat";
import ErrorPage from "./pages/error";
import NotFound from "./pages/not-found";

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
    path: "/surat/detail/:nomor",
    element: <DetailSurat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
