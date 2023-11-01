import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/userContext.jsx";

const root = document.getElementById("root");
const rootElement = createRoot(root);

const queryClient = new QueryClient();
rootElement.render(
	<BrowserRouter>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</QueryClientProvider>
		</AuthProvider>
	</BrowserRouter>
);
