import React from 'react';
import InputsRegistrarse from './componentes/InputsRegistrarse';

function Registrarse() {
    
  return (
    <>
        <section className="py-5">
            <div className="container d-flex justify-content-center align-items-center px-3">
                {/* <!-- Formulario de contacto --> */}
                <div className="card bg-violeta-negro rounded-3 py-5 mb-5 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div className="text-center mb-5 mx-5">
                        {/* <div className="feature bg-morado bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div> */}
                        <h1 className="fw-bolder text-white">Regístrate</h1>
                    </div>
                    <div className="row gx-3 justify-content-center">
                        <div className="col-10 col-lg-10 col-xl-10 px-3">
                            {/* <!-- Formulario de registro --> */}
                            <form  data-sb-form-api-token="API_TOKEN">
                                {/* Inputs */}
                                <InputsRegistrarse />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Registrarse;
