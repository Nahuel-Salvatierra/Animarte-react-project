// // AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();                  

// export const AuthProvider = ({ children }) => {       
//   const [userRole, setUserRole] = useState(null); 

//   return (
//     <AuthContext.Provider value={{ userRole, setUserRole }}>  {/*AuthContext.Provider proporciona el valor del contexto a los componentes descendientes. En este caso, estamos proporcionando userRole y setUserRole como valores del contexto. Esto permitirá que otros componentes accedan y actualicen el rol del usuario a través del contexto. */}
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);       {/*useAuth(para EXPORTAR las funciones) es un hook personalizado (podes darle cualquier nombre) que se crea para facilitar el acceso al contexto desde otros componentes.
// con "useContext" obtiene el valor AuthContext. */}
