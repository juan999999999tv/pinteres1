import  { create }  from "zustand"; // Usa import en lugar de require

export const useUserStore = create((set) => ({
  usuario: null,
  loginUser: (user) => set(() => ({ usuario: user })),
}));

