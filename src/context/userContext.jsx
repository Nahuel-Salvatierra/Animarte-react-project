// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
// createContext se usa para crear nuevo contexto.    //useContext es un hook como useState, este sirve para acceder al valor de un contexto.

const AuthContext = createContext();                  //Creamos el nuevo contexto. Puede ser cualquier nombre.

export const AuthProvider = ({ children }) => {       {/* AuthProvider (COMPONENTE) es el que le da contexto a toda la App. Éste es el que usamos para renderizar en main.jsx. Se le da el children para que todos los hijos tengan acceso al contexto de autentificación. */}
  const [userRole, setUserRole] = useState(null);     {/* useState(null) porque nadie esta registrado. userRole representará a los roles y setUserRole para controlar y actualizar el estado actual. */}

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>  {/*AuthContext.Provider proporciona el valor del contexto a los componentes descendientes. En este caso, estamos proporcionando userRole y setUserRole como valores del contexto. Esto permitirá que otros componentes accedan y actualicen el rol del usuario a través del contexto. */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);       {/*useAuth(para EXPORTAR las funciones) es un hook personalizado (podes darle cualquier nombre) que se crea para facilitar el acceso al contexto desde otros componentes.
con "useContext" obtiene el valor AuthContext. */}
