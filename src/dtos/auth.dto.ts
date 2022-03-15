export interface UserDTO {
	id: number;
	email: string;
	role: string;
	profileId: number;
}

export interface IAuthState {
	user: UserDTO | undefined;
	isAuthenticated: boolean;
}

export interface IAuthContext {
	logout: () => void;
	setAuthState: (user: UserDTO) => void;
	authState: IAuthState;
}
