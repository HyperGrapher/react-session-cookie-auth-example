import { createContext, useState, useContext, useEffect, ReactChild } from "react";
import { IAuthContext, IAuthState, UserDTO } from "../dtos/auth.dto";
import { useNavigate } from "react-router-dom";
import { HttpContext } from "./HttpContext";

type Props = {
	children: ReactChild;
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);
const { Provider } = AuthContext;

const AuthProvider: React.FC<Props> = ({ children }) => {
	const navigate = useNavigate();
	const httpContext = useContext(HttpContext);

	const [authState, setAuthState] = useState<IAuthState>({
		user: undefined,
		isAuthenticated: false,
	});

	useEffect(() => {
		const getuser = async () => {
			console.log('Get User');
			
			try {
				const { data } = await httpContext.authAxios!.get("/auth/user");
				// Conform to UserDTO
				delete data.passport.user.active
				delete data.passport.user.phone
				delete data.passport.user.created
				delete data.passport.user.updated
				setAuthState({
					user: data.passport.user,
					isAuthenticated: true,
				});
			} catch (err) {
				setAuthState({
					user: undefined,
					isAuthenticated: false,
				});
			}
		};

		getuser();
	}, [httpContext]);

	const setAuthInfo = (user: UserDTO) => {
		console.log('setAuthState');

		setAuthState({
			user,
			isAuthenticated: user && user.id ? true : false,
		});
	};
	// TODO: server logout yapilacak
	const logout = async () => {
		try {
			// await httpContext.publicAxios.post("/auth/logout");

			setAuthState({
				user: undefined,
				isAuthenticated: false,
			});
			navigate("login", { replace: true });
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Provider
			value={{
				authState,
				setAuthState: (user: UserDTO) => setAuthInfo(user),
				logout,
			}}
		>
			{children}
		</Provider>
	);
};

export { AuthContext, AuthProvider };
