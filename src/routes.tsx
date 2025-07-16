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
    loader: async ({ params }) => {
      const nomor = params.nomor;
      const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
      if (!response.ok) {
        throw new Error("Gagal memuat data surat");
      }

      const res = await response.json();
      return res.data;
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
