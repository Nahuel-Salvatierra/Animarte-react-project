import '../estilos/topbuttons.css'

function TopButtons() {

  let expandible = document.getElementById('productos')
  expandible.addEventListener('click', () => {
    console.log(expandible.getAttribute('aria-expanded'))
  })



  return (
    <div>
      <a href='#desplegable' className='toggle' id='productos' aria-expanded='false'>
        Productos
      </a>
      <div id='desplegable'>
        <li>Remeras</li>
        <ul>cuadernos
          <li>A4</li>
          <li>A5</li>
          <li>A6</li>
        </ul>
        <li>Tazas</li>
      </div>

      <li>
        contacto
      </li>
      <li className=''>
        como comprar
      </li>
    </div >
  );
}

export default TopButtons