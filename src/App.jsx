import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/loginPage";
import Layout from "./Componentes/Layout";
import RequireAuth from "./Componentes/RequireAuth";
import Unauthorized from "./Componentes/Unauthorized";
import Home from "./pages/Home/Home";
const ROLES = {
	user:'user',
	admin:'admin'
}

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>}>
					{/* public routes */}
					<Route path="login" element={<LoginPage />} />
					<Route path='unauthorized' element={<Unauthorized/>}/>
					{/* private routes */}
					<Route path="dashboard" element={< RequireAuth allowedRoles={ROLES.admin}/>}/>
						<Route path="/" element={<Home />} />
					</Route>
					{/* <Route path="register" element={<Register />} />*/}
				</Routes>
		</>
	);
}

export default App;
