import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);

	useEffect(() => {
		// Check for stored tokens on app load
		const storedAccessToken = localStorage.getItem("accessToken");
		const storedRefreshToken = localStorage.getItem("refreshToken");

		if (storedAccessToken) {
			setAccessToken(storedAccessToken);
		}

		if (storedRefreshToken) {
			setRefreshToken(storedRefreshToken);
		}
	}, []);

	const login = async (data) => {
		try {
			let response = await axios.post(
				"https://teamup.liara.run/api/token/",
				data,
			);
			let accessToken = response.data.access;
			let refreshToken = response.data.refresh;

			// Store tokens in localStorage
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("refreshToken", refreshToken);

			setAccessToken(accessToken);
			setRefreshToken(refreshToken);

			return response;
		} catch (error) {
			console.log(error)
		}
	};

	const logout = () => {
		// Remove tokens from localStorage
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");

		setAccessToken(null);
		setRefreshToken(null);
	};

	const refreshTokenFunc = async () => {
		try {
			const response = await axios.post(
				"https://teamup.liara.run/api/token/refresh/",
				{
					refreshToken,
				},
			);

			// Update the access token in localStorage
			const newAccessToken = response.data.accessToken;
			localStorage.setItem("accessToken", newAccessToken);

			setAccessToken(newAccessToken);
		} catch (error) {
			console.error("Token refresh failed", error);
			logout();
		}
	};

	return (
		<AuthContext.Provider
			value={{ accessToken, refreshToken, login, logout, refreshTokenFunc }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};