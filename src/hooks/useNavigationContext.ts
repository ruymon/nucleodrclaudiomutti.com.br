import { type NavigationPath } from "@/@types/navbar";
import { create } from "zustand";

type NavigationContextType = {
  activePath: NavigationPath;
  setActivePath: (path: NavigationPath) => void;
};

export const useNavigationContext = create<NavigationContextType>((set) => ({
  activePath: "hero",
  setActivePath: (path) => set({ activePath: path }),
}));
