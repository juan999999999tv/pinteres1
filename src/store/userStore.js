import  { create }  from "zustand"; // Usa import en lugar de require

export const useUserStore = create((set) => ({
  usuario: null,
  loginUser: (userData) => set(() => ({ usuario: userData })),
  logoutUser: () => set({ user: null }),
}));

