import { useState, type ReactNode } from "react";
import { AudioContext } from "./AudioContext";

export const AudioContextProvider = ({ children }: { children: ReactNode }) => {
  const [url, setUrl] = useState<string>("");
  const [label, setLabel] = useState<string>("");

  return (
    <>
      <AudioContext.Provider value={{ url, setUrl, label, setLabel }}>
        {children}
      </AudioContext.Provider>
    </>
  );
};
