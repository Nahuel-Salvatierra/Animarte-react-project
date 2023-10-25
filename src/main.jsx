import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot desde 'react-dom'
import App from "./App.jsx";
import { AuthProvider } from "./context/userContext.jsx"; //AuthProvider se utiliza contexto de autenticación a una aplicación. Se utiliza cuando hay que gestionar la autenticación y compartir información sobre el usuario autenticado en varios componentes de la aplicación.
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// Utiliza createRoot para renderizar tu aplicación
const root = document.getElementById("root");
const rootElement = createRoot(root); //CreateRoot es una de las nuevas formas para renderizar.

const queryClient = new QueryClient()
rootElement.render(
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </AuthProvider>
);
