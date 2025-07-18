import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import "./index.css";
import AppWrapper from "./components/app-wrapper.tsx";
import { AudioContextProvider } from "./context/AudioProvider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <AudioContextProvider>
        <Toaster richColors position="top-right"/>
        <RouterProvider router={router} />
      </AudioContextProvider>
    </AppWrapper>
  </StrictMode>
);
