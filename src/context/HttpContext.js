import axios from "axios";
import { createContext, useEffect } from "react";

const HttpContext = createContext();

const { Provider } = HttpContext;

const HttpProvider = ({ children }) => {
	const authAxios = axios.create({
		baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
		headers: {
			application: "1",
			Accept: "application/json",
			withCredentials: true, // Required for session cookie to be set during login
			credentials: "include",
		},
	});

	const publicAxios = axios.create({
		baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
		headers: {
			application: "1", // api versioning with header (Nest.js)
			Accept: "application/json",
		},
		withCredentials: true, // Required for session cookie to be set during login
	});

	authAxios.interceptors.response.use(
		(response) => {
			console.log("💚 interceptor response");
			console.log({ response });
			return response;
		},
		(error) => {
			console.log("⛔ interceptor Error");
			const status = error && error.response ? error.response.status : 0;
			console.log({ status });

			if (status === 401 || status === 403) {
				console.error(`Error code: ${status}`);
			}

			return Promise.reject(error);
		}
	);

	useEffect(() => {
		const getCsrfToken = async () => {
			try {
				const { data } = await publicAxios.get("/auth/csrf-token");
				console.log(data.csrfToken);
				publicAxios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
				authAxios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
			} catch (err) {
				console.log(err);
			}
		};
		getCsrfToken();
	}, [authAxios, publicAxios]);

	return <Provider value={{ authAxios, publicAxios }}> {children} </Provider>;
};

export { HttpContext, HttpProvider };
