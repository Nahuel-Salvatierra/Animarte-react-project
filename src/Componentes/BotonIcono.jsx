import '../estilos/BotonIcono.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function BotonIcono(props) {

  return (
    <a href={props.link} target='_blank'>
      <div className='contenedor-icono'>
        <i className={props.icono} ></i>
      </div>
    </a>
  );
}

export default BotonIcono;