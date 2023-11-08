import Login from "./Login";
import { Register } from "./Register";
import { useState } from "react";

export default function LoginRegister() {
	const [compRegistrarse, setCompRegistrarse] = useState(false);

	const toggleRegistrarse = () => {
		setCompRegistrarse(!compRegistrarse);
	};

	return (
		<div className="offcanvas-body">
			<h3
				className="offcanvas-title d-flex justify-content-center"
				id="offcanvasRightLabel"
			>
				{compRegistrarse ? "Regístrate" : "Iniciar Sesión"}
			</h3>
			{compRegistrarse ? <Register /> : <Login />}

			<p className="text-center">
				{compRegistrarse
					? "¿Tienes una cuenta?"
					: "¿No tienes una cuenta?"}
				<a
					href="#"
					onClick={toggleRegistrarse}
					className="text-primary"
				>
					{compRegistrarse
						? "Inicia sesión aquí."
						: "Regístrate aquí."}
				</a>
			</p>
		</div>
	);
}
