import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/userContext";
import "./InputIniciarSesion.css";
import { handleLoginError } from "../handleError/login.error";
import { login } from "../api/auth.API";

function Login() {
	const { setAuth } = useAuth();

	const [user, setUser] = useState("");
	const [pwd, setPwd] = useState("");
	const [errMsj, setErrMsj] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname ?? "/";

	const userRef = useRef(user);
	const errRef = useRef();

	// useEffect(() => {
	// 	userRef.current.focus();
	// }, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const userData = Object.fromEntries(formData);
		console.log(userData)
		try {
			const response = await login(userData);
			console.lop(userData)
			const accessToken = response.accessToken;
			setAuth({ use: user, pwd, roles, accessToken });
			setUser("");
			setPwd("");
			navigate(from, { replace: true });
		} catch (err) {
			setErrMsj(handleLoginError(err));
			// errRef.current.focus();
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-floating mb-4 mt-4">
				<input
					className="form-control"
					name="email"
					type="email"
					placeholder="name@example.com"
					value={user}
					onChange={(e) => setUser(e.target.value)}
					onBlur={() => "email"}
				/>
				<label htmlFor="email">Dirección de email</label>

				{/* {showMensaje.email && (
					<p className="text-danger">Por favor, ingrese su email.</p>
				)} */}
			</div>
			<div className="form-floating mb-4">
				<input
					className="form-control"
					name="password"
					type="password"
					placeholder="Contraseña"
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
					onBlur={() => "password"}
				/>
				<label htmlFor="password">Contraseña</label>

				{/* {showMensaje.password && (
					<p className="text-danger">
						Por favor, ingrese su contraseña.
					</p>
				)} */}
			</div>

			<div className="d-grid">
				<button
					className="btn fondo btn-lg text-white mb-4 "
					id="submitButton"
					type="submit"
				>
					Iniciar Sesión
				</button>
			</div>

			{/* {errorMensajeIniciarSesion && (
                <p className="text-danger">{errorMensajeIniciarSesion}</p>
            )} */}

			<div className="d-grid">
				<button
					type="submit"
					className="btn bg-danger btn-lg text-white btnGoogle mb-4"
				>
					<span className="iconBtnGoogle">
						<i className="bi bi-google"></i>
					</span>
					<span className="textoBtnGoogle"> Inicia con Google </span>
				</button>
			</div>
		</form>
	);
}

export default Login;
