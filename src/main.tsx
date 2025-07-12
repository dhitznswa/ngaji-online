import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import "./index.css";
import AppWrapper from "./components/app-wrapper.tsx";
import { AudioContextProvider } from "./context/AudioProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <AudioContextProvider>
        <RouterProvider router={router} />
      </AudioContextProvider>
    </AppWrapper>
  </StrictMode>
);
