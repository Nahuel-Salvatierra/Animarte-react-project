import InputBuscar from "./InputBuscar";
import BotonIcono from "./BotonIcono";
import '../estilos/navbar.css'


function NavBar() {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg fondo">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Animarte</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <BotonIcono
                                icono={'bi bi-instagram'}
                                link={'https://www.instagram.com/tienda.animarte/'}/>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Remeras</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <InputBuscar/>
                        </form>
                    </div>
                </div>
            </nav>
        </nav>
    )
}

export default NavBar;