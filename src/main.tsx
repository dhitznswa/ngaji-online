import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import "./index.css";
import AppWrapper from "./components/app-wrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </StrictMode>
);
