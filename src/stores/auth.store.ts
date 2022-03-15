import { UserDTO } from "dtos/auth.dto";
import create from "zustand";

type Auth = {
	user: UserDTO | undefined;
	setUser: (type: UserDTO) => void;

	isAuth: boolean;
	setAuth: (type: boolean) => void;
};

const useAuthStore = create<Auth>((set) => ({
	user: undefined,
	setUser: (user: UserDTO) => set({ user: user }),

	isAuth: false,
	setAuth: (val: boolean) => set({ isAuth: val }),
}));

export default useAuthStore;
