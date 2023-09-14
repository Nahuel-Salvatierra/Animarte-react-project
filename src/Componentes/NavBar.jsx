import React, { useState } from "react";
import InputBuscar from "./InputBuscar";
import IniciarSesion from "../pages/iniciarSesion/IniciarSesion";
import '../estilos/navbar.css'


function NavBar() {



    const [productoActivo, setProductoActivo] = useState(null);

    const activarProducto = (producto) => {
        if (productoActivo === producto) {
            // Si el mismo producto está activo, desactívalo
            setProductoActivo(null);
        } else {
            setProductoActivo(producto);
        }
    };


    return (
        <nav className="navbar fondo">
            <div className="container-fluid">
                {/* Boton OffCanvas, cabiar boton a icono */}
                <i className="bi bi-list fs-2 text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ></i>

                {/* Logo Centrado */}
                <a className="navbar-brand ms-5" href="#">
                    <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/160126086/logo-2021100113545352800.png" className="img-logo" alt="" />
                </a>

                {/* Contenido OffCanvas */}
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                            {/* Productos */}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            onClick={() => setProductoActivo(null)}
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        {/* Contenido Offcanvas */}
                        Contenido de Productos, etc
                        {/* Componente de lista de productos */}
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div role="search" className="me-3">
                        <InputBuscar />
                    </div>
                    <div>
                        <IniciarSesion />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;