import { useState } from "react";
import { signUp } from "../api/auth.API";

export function Register() {
	const [form, setForm] = useState({ email: "", password: "", name: "" });
	const [errMsj, setErrMsj] = useState("");

	function handleChange(e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	const handleSubmit = async (e) => {
    
		e.preventDefault();
		try {
			form.google = {

			}
			const response = await signUp(form);
			console.log(response)
			const accessToken = response.accessToken;
			// setAuth({ use: , roles, accessToken });
		} catch (err) {
			// errRef.current.focus();
      console.log(err)
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-floating mb-4 mt-4">
				<input
					className="form-control"
					name="name"
					type="text"
					placeholder="John"
					onChange={handleChange}
				/>
				<label htmlFor="name">Nombre</label>
			</div>
			<div className="form-floating mb-4 mt-4">
				<input
					className="form-control"
					name="email"
					type="email"
					placeholder="name@example.com"
					onChange={handleChange}
					onBlur={() => "contraseña"}
				/>
				<label htmlFor="email">Dirección de email</label>
			</div>

			<div className="form-floating mb-4 mt-4">
				<input
					className="form-control"
					name="password"
					type="text"
					placeholder="********"
					onChange={handleChange}
					onBlur={() => "pwd"}
				/>
				<label htmlFor="password">Contraseña</label>
			</div>
			<div className="d-grid">
				<button
					className="btn fondo btn-lg text-white mb-4 "
					id="submitButton"
					type="submit"
				>
					Registrarse
				</button>
			</div>
		</form>
	);
}
