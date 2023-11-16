import { create } from "zustand";
//import { usePersistedTheme } from "./hooks";
//const [theme, setTheme] = usePersistedTheme("Theme", light);

export const themeStore: any = create((set, get) => ({
     theme: null,

     setTheme: (theme) => {
          set(() => ({
               theme: theme,
          }));
     },
}));
