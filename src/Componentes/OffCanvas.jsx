import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
import { Register } from "./Register";
import LoginRegister from "./LoginRegister";
import useAuth from "../hooks/useAuth";

function OffCanvas() {
	const user = useAuth();

	if(user.auth) {
		const offcanvas = document.querySelectorAll('.show')
		offcanvas.forEach(nodeElement => nodeElement.classList.remove('show'))
	}

	return (
		<section>
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
				{user.auth.role ? null : <LoginRegister />}
			</div>
		</section>
	);
}

export default OffCanvas;
