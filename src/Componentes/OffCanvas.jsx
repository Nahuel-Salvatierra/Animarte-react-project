import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";

function OffCanvas() {
	const [compRegistrarse, setCompRegistrarse] = useState(false);

	const toggleRegistrarse = () => {
		setCompRegistrarse(!compRegistrarse);
	};

	return (
		<>
			<i
				className="bi bi-person-circle text-white fs-2"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight"
			></i>

			<div
				className="offcanvas offcanvas-end"
				tabIndex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
			>
				<div className="offcanvas-header">
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<h3
						className="offcanvas-title d-flex justify-content-center"
						id="offcanvasRightLabel"
					>
						{" "}
						{compRegistrarse ? "Regístrate" : "Iniciar Sesión"}{" "}
					</h3>
					{compRegistrarse ? (
						// <InputsRegistrarse />
						true
					) : (
						<Login />
					)}

					<p className="text-center">
						{compRegistrarse
							? "¿Tienes una cuenta?"
							: "¿No tienes una cuenta?"}{" "}
						<a
							href="#"
							onClick={toggleRegistrarse}
							className="text-primary"
						>
							{compRegistrarse
								? "Regístrate aquí."
								: "Inicia sesión aquí."}
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default OffCanvas;
