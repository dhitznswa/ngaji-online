import { createBrowserRouter } from "react-router";
import Welcome from "./pages/Welcome";
import Surat from "./pages/Surat";
import DetailSurat from "./pages/DetailSurat";

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

      const data = await response.json();
      return data.data;
    },
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
