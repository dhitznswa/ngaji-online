import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { AudioContextProvider } from "./context/AudioProvider.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppWrapper from "./components/app-wrapper.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <AudioContextProvider>
          <Toaster richColors position="top-right" />
          <RouterProvider router={router} />
        </AudioContextProvider>
      </AppWrapper>
    </QueryClientProvider>
  </StrictMode>
);
