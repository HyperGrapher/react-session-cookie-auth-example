import { UserDTO } from "dtos/auth.dto";
import { BehaviorSubject } from "rxjs";
import { authAxios, publicAxios } from "./axios.config";

const initUserSubject = {
	id: 0,
	email: "",
	role: "",
	profileId: 0,
};

const userSubject = new BehaviorSubject(initUserSubject);
const dataSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("data")!));

export const authService = {
	login,
	logout,
	authCheck,
	user: userSubject.asObservable(),
	data: dataSubject.asObservable(),
	get userValue() {
		return userSubject.value;
	},
	get dataValue() {
		return dataSubject.value;
	},
};

async function login(body: { email: string; password: string }): Promise<UserDTO | undefined> {
	try {
		const { data } = await publicAxios.post(`/auth/login`, body);
		const user = data as UserDTO;
		localStorage.setItem("data", JSON.stringify({ signed: true }));
		dataSubject.next({ signed: true }); // visiting user is previously signed in
		userSubject.next(user);
		return user;
	} catch (error) {
		console.error(error);
		return undefined;
	}
}

async function logout(msg: string = "") {
	userSubject.next(initUserSubject);
	const resp = await authAxios.get(`/auth/logout`);
	console.log(resp);
}

// Checks user session status
// if response 401 or 403 user auto logout;
// This is handled by axios interceptor in axios.config.ts
async function authCheck() {
	try {
		const { data } = await authAxios.get(`/auth/user`);

		// Conform to UserDTO
		delete data.passport.user.active;
		delete data.passport.user.phone;
		delete data.passport.user.created;
		delete data.passport.user.updated;
		userSubject.next(data.passport.user);

		return data.passport.user;
	} catch (err) {
		return console.error(err);
	}
}

/*
function register(username: string, password: string, email: string, userType: UserType): Promise<IToken> {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, email, password, currentRole: userType, defaultRole: userType }),
	};

	return fetch(`${process.env.REACT_APP_SERVER_URL}/auth/register`, requestOptions)
		.then(handleResponse)
		.then((token) => {
			// store user details and jwt token in local storage
			// to keep user logged in between page refreshes
			saveJWTUserData(token);
			localStorage.setItem("token", JSON.stringify(token));
			tokenSubject.next(token);

			return token;
		});
}
*/
