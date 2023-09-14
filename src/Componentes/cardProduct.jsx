import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../estilos/cardProduct.css'

const CardProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <a className='row gap-3 mt-3 justify-content-center' href=''>
      {data.map((objeto) => (
        <div className='card col-xl-3 col-md-5' >
          <img src={objeto.url} className="card-img-top" alt="..." />
          <div className="card-body row align-items-end">
            <strong className="card-title">{objeto.nombre}</strong>
            <p className="card-text">
              Modelo: <br></br>
              {objeto.modelo}
              </p>
            <div href="#" className="btn btn-primary espacio-lateral"><i className="bi bi-cart3"></i>Añadir</div>
          </div>
        </div>
      ))}
    </a>
  );
};

export default CardProduct
