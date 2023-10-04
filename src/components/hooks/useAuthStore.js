import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

const useAuthStore = create(
    devtools(
        persist(
            (set) => ({
                name: "",
                email: "",
                phone: "",
                accessToken: "",
                refreshToken: "",
                isAuthenticated: true,

                login: (
                    accessToken,
                    refreshToken,
                    role,
                    name,
                    email,
                    phone,
                ) => {
                    set((state) => ({ ...state, role, name, email, phone, accessToken, refreshToken, isAuthenticated: true, }))
                },

                logout: () => {
                    localStorage.clear()
                    set((state) => ({ isAuthenticated: false, accessToken: null }));
                    window.location.reload()
                },
                updateOneData: (key = "", value = "") => {
                    set((state) => ({ [key]: value }))
                }
            }),
            {
                name: "auth",
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
);

export default useAuthStore;
