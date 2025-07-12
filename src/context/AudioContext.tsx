import { createContext } from "react";

interface AudioContextType {
  url: string;
  label: string;
  setUrl: (url: string) => void;
  setLabel: (text: string) => void;
}

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
);
