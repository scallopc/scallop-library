import { create } from "zustand";


export const menuStore: any = create((set, get) => ({
    showMenu: false,

 setShowMenu: (show) => {
    set(() => ({
        showMenu: show,
    }));
  },
}))