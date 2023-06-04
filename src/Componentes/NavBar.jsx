import InputBuscar from "./InputBuscar";
import BotonIcono from "./BotonIcono";
import '../estilos/navbar.css'


function NavBar() {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg fondo ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/86/160126086/logo-2021100113545352800.png" class="img-logo" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto align-items-center text-center mb-2 mb-lg-0">
                            <li className="nav-item">
                                <BotonIcono
                                    icono={'bi bi-instagram'}
                                    link={'https://www.instagram.com/tienda.animarte/'} />
                            </li>
                            <li class="desplegable">
                                <button class="dropbtn">PRODUCTOS</button>
                                <div class="desplegable-content">
                                    <a href="#">CUADERNOS</a>
                                    <a href="#">REMERAS</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <InputBuscar />
                        </form>
                    </div>
                </div>
            </nav>
        </nav>
    )
}

export default NavBar;