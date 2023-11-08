import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./InputIniciarSesion.css";
import { handleLoginError } from "../handleError/login.error";
import { login } from "../api/auth.API";
import useAuth from "./../hooks/useAuth";
import jwtDecode from "jwt-decode";

function Login() {
	const { setAuth } = useAuth();

	const [form, setForm] = useState({ email: "", password: "" });

	const [isLoading, setIsLoadin] = useState(false);

	const [errMsj, setErrMsj] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname ?? "/";
	const userRef = useRef(form.email);
	const errRef = useRef();

	// useEffect(() => {
	// 	userRef.current.focus();
	// }, []);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await login(form);
			const accessToken = response.accessToken;
			const { role } = jwtDecode(accessToken);
			console.log(role , accessToken);

			setAuth({ role:[role] , token:accessToken });
			navigate( '/dashboard', { replace: true });
		} catch (err) {
			console.log(err);
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
					onChange={handleChange}
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
					type="text"
					placeholder="Contraseña"
					onChange={handleChange}
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
