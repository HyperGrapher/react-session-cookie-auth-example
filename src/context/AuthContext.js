import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HttpContext } from "./HttpContext";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const httpContext = useContext(HttpContext);

	const [authState, setAuthState] = useState({
		userInfo: null,
		isAuthenticated: false,
	});

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const { data } = await httpContext.authAxios.get("/auth/user-info");
                console.log(data.passport.user);
				setAuthState({
					userInfo: data.passport.user,
					isAuthenticated: true,
				});
			} catch (err) {
				setAuthState({
					userInfo: {},
					isAuthenticated: false,
				});
			}
		};

		getUserInfo();
	}, [httpContext]);

	const setAuthInfo = ({ userInfo }) => {
		setAuthState({
			userInfo,
			isAuthenticated: userInfo && userInfo._id ? true : false,
		});
	};

	const logout = async () => {
		try {
			await httpContext.publicAxios.post("/logout");

			setAuthState({
				userInfo: {},
				isAuthenticated: false,
			});
			navigate("login", { replace: true });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Provider
			value={{
				authState,
				setAuthState: (authInfo) => setAuthInfo(authInfo),
				logout,
			}}
		>
			{children}
		</Provider>
	);
};

export { AuthContext, AuthProvider };
