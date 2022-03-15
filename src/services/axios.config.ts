import { authService } from "./auth.service";
import axios, { AxiosResponse } from "axios";

export const authAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Application: "1", // Required for correct api endpoint. (API vesion)
		Accept: "application/json",
	},
	withCredentials: true, // Required for session cookie to be set during login
});

export const publicAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Application: "1", // Required for correct api endpoint. (API vesion)
		Accept: "application/json",
	},
	withCredentials: true, // Required for session cookie to be set during login
});

authAxios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const status = error && error.response ? error.response.status : 0;

		if (status === 401 || status === 403) {
			authService.logout();
		}

		return Promise.reject(error);
	}
);

export const responseBody = (response: AxiosResponse) => response.data;
