import create from "zustand";

export type ProjectNavType = "profile" | "notification" | undefined;

type NavbarMenuType = {
	menu: ProjectNavType;
	setMenu: (type: ProjectNavType) => void;
};

const useNavbarMenuStore = create<NavbarMenuType>((set) => ({
	menu: undefined,
	setMenu: (value: ProjectNavType) => set({ menu: value }),
}));

export default useNavbarMenuStore;
