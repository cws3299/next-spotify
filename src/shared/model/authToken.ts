import { create } from "zustand";

export interface AuthState {
    userId: string;
    setState: (userId: string) => void;
    removeState: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    userId: "",
    setState: (userId: string) => {
        set(() => ({ userId }));
    },
    removeState: () => {
        set(() => ({ userId: "" }));
    },
}));
