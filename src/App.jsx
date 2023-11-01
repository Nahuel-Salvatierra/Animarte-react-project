import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Componentes/NavBar";
import Login from "./Componentes/Login";

function App() {
	return (
		<>
            <header>
                <NavBar></NavBar>
            </header>
			<Routes>
				<Route path="/" element={<></>}>
					{/* public routes */}
					<Route path="login" element={<Login />} />
					{/* <Route path="register" element={<Register />} />
				<Route path="linkpage" element={<LinkPage />} />
				<Route path="unauthorized" element={<Unauthorized />} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
