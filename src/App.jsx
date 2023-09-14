import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NavBar from './Componentes/NavBar';
// import CardProduct from './Componentes/cardProduct';
import Carrito from './Componentes/carritoCompras';
// import IniciarSesion from './pages/iniciarSesion/IniciarSesion';
import { useAuth } from './context/userContext';                  //Obtenemos para acceder al estado "userRole"






function App() {
    const { userRole } = useAuth();                                 //Obtenemos el valor actual del usuario.
    console.log('Nuevo userRole después del inicio de sesión:', userRole);
    

    return (
        <div>
            
            <NavBar />
            
            {/* <div className="">
                <div className="row d-flex justify-content-center">
                    <div className='col-md-12 col-lg-9 col-9'>
                        <CardProduct />
                    </div>
                    <div className='d-none d-lg-block col-md-3 '>
                        <Carrito />
                    </div>
                </div>
            </div> */}

            <footer>
            </footer>
        </div>
    )
}

export default App
