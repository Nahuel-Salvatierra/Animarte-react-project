import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import NavBar from './Componentes/NavBar'
import CardProduct from './Componentes/cardProduct'
import Carrito from './Componentes/carritoCompras'


function App() {

  return (
    <div>
      <NavBar />
      <body>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className='col-md-12 col-lg-9 col-9'>
              <CardProduct />
            </div>
            <div className='d-none d-lg-block col-md-3'>
              <Carrito />
            </div>
          </div>
        </div>

      </body>
      <footer>
      </footer>
    </div>
  )
}

export default App
