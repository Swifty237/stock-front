import { createContext, Dispatch, SetStateAction } from "react";

type SidebarContextType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
  toggle: true,
  setToggle: () => {}
});