import React, { createContext, ReactChild } from "react";
import axios, { AxiosInstance } from "axios";

let authAxios: AxiosInstance | undefined;
let publicAxios: AxiosInstance | undefined;
const HttpContext = createContext({ authAxios, publicAxios });
const { Provider } = HttpContext;

type Props = {
	children: ReactChild;
};
const HttpProvider: React.FC<Props> = ({ children }) => {
	authAxios = axios.create({
		baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
		headers: {
			Application: "1", // Required for correct api endpoint. (API vesion)
			Accept: "application/json",
		},
		withCredentials: true, // Required for session cookie to be set during login
	});

	publicAxios = axios.create({
		baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
		headers: {
			application: "1",
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
				// Do things or not
			}

			return Promise.reject(error);
		}
	);

	// useEffect(() => {
	// 	const getCsrfToken = async () => {
	// 		try {
	// 			console.log("getting CSRF");
	// 			const { data } = await publicAxios.get("/auth/csrf-token");
	// 			console.log(data.csrfToken);
	// 			publicAxios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
	// 			authAxios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	getCsrfToken();
	// }, [authAxios, publicAxios]);

	return <Provider value={{ authAxios, publicAxios }}> {children} </Provider>;
};

export { HttpContext, HttpProvider };
