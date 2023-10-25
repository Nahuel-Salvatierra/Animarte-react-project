import React, { useState } from 'react';
// Importaciones Google Login
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function InputsRegistrarse({ }) {
    // Estados para los campos del formulario
    const [inputR, setInputR] = useState({
        nombre: "",
        apellido: "",
        email: "",
        repetirEmail: "",
        contraseña: "",
        repetirContraseña: "",
    });

    const [showMensaje, setShowMensaje] = useState({
        nombre: false,
        apellido: false,
        email: false,
        repetirEmail: false,
        contraseña: false,
        repetirContraseña: false,
    });

    //Estados para Verificación
    const [verificacionEmail, setVerificacionEmail] = useState(true);
    const [verificacionContraseña, setVerificacionContraseña] = useState(true);


    //Codigo de los Estados del formulario.
    //Evaluar si el formulario el estado del input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputR({
            ...inputR,
            [name]: value,
        });
    }
    //Mostramos mensaje en caso de que los inputR estén vacíos
    const handleShowMensaje = (mensaje) => {
        setShowMensaje({
            ...showMensaje,
            [mensaje]: inputR[mensaje] === "",
        })
    }

    // --- //

    //Verificación de Email y Contraseña
    const handleVerificarEmail = (e) => {
        const { name, value } = e.target;
        const emailValue = inputR.email                                      //inputs.email para agarrar el estado actual del input 

        //verificacion de email
        setVerificacionEmail(
            name === 'repetirEmail' &&
            emailValue.includes('@') &&
            value === emailValue
        )

    }

    const handleVerificarContraseña = (e) => {
        const { name, value } = e.target;
        const contraseñaValue = inputR.contraseña;

        // verificacion de contraseña
        setVerificacionContraseña(
            name === 'repetirContraseña' &&
            value === contraseñaValue &&
            value.length >= 8
        )
    }

    // Inicio de Sesion con Google
    const firebaseConfig = {
        apiKey: "AIzaSyDRGDMr83tSscN4mub7Jro2nSGtCVGFnHM",
        authDomain: "loguin-b3ccf.firebaseapp.com",
        projectId: "loguin-b3ccf",
        storageBucket: "loguin-b3ccf.appspot.com",
        messagingSenderId: "1068958682787",
        appId: "1:1068958682787:web:7ba820706f7f51b5a23916",
        measurementId: "G-B89T3LCD8W"
    };
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    function handleSignUpGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // Obtenemos Google Access Token. y obtenemos acceso a Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // Informacion de usuario
                const user = result.user;
                // const email = result.email;
                const providedLastname = prompt("Por favor, ingrese su apellido: ");
                const providedPassword = prompt("Por favor, ingrese su contraseña: ");

                // Crear objeto con los datos del usuario
                const userData = {
                    name: user.displayName || "",
                    lastname: providedLastname || "",
                    email: user.email || "", 
                    password: providedPassword || "", 
                };

                //verificamos que no este vacío.
                if (!userData.email) {
                    console.error("El email de Google está vacío.");
                    return;
                }

                fetch('http://localhost:7000/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                })
                    .then(response => {
                        if (response.ok) {
                            console.log("Registro Exitoso en la BD.")
                            handleRegistro()
                        } else {
                            console.log("Error en la solicitud:", response.status, response.statusText);
                            // Puedes imprimir el cuerpo de la respuesta si es relevante para la depuración
                            response.text().then(errorText => {
                                console.log("Cuerpo del error:", errorText);
                            });
                        }
                    })
                // console.log( "Iniciaste Sesion con Google" + user.email)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    // ---------------------------------------------------------------- //
    // Fetch
    //ACA VA TODO EL FETCH

    //Funcion en el que enviaremos el formulario
    const handleRegistro = () => {
        //comprobar verificación de email y contraseña

        //Creamos un objeto con los datos del usuario
        const userData = {                                 //Este userData lo llamaremos dentro del fetch
            name: inputR.nombre,
            lastname: inputR.apellido,
            email: inputR.email,
            password: inputR.contraseña,
        }

        fetch('http://localhost:7000/auth/signup', {
            method: 'POST',                                         // POST para enviar al servidor
            headers: {
                'Content-Type': 'application/json',                 //Solicitud tipo JSON
            },
            body: JSON.stringify(userData),                         //Obtenemos el objeto con los datos del usuario

        })
            .then(response => {
                if (response.ok) {
                    //solicitud exitosa
                    console.log("Usuario Registrado.");
                    console.log(response);
                    console.log(response.ok);
                } else {
                    //Fallo la solicitud
                    console.error("Error al registrar");
                }
            })
            .catch(error => {
                //error de red, no se pudo conectar al servidor
                console.error("Error de red", error);
            })
    }






    return (
        <div>
            {/* Nombre input */}
            <div className="form-floating mt-4 mb-3">
                <input
                    className="form-control"
                    name='nombre'
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={inputR.nombre}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("nombre")}
                />
                <label htmlFor="nombre">Nombre</label>

                {showMensaje.nombre &&
                    <p className='text-danger'> Por favor, ingrese su nombre. </p>
                }
            </div>

            {/* Apellido input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='apellido'
                    id="apellido"
                    type="text"
                    placeholder="Apellido"
                    value={inputR.apellido}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("apellido")}
                />
                <label htmlFor="apellido">Apellido</label>

                {showMensaje.apellido &&
                    <p className='text-danger'> Por favor, ingrese su Apellido. </p>
                }
            </div>

            {/* Email address input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='email'
                    type="email"
                    placeholder="name@example.com"
                    value={inputR.email}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarEmail(e)
                    }}
                    onBlur={() => handleShowMensaje("email")}
                />
                <label htmlFor="email">Dirección de email</label>

                {showMensaje.email &&
                    <p className='text-danger'> Por favor, ingrese su email. </p>
                }
                {!verificacionEmail &&
                    <p className='text-danger'> El email no es válido o los campos no coinciden. </p>
                }
            </div>

            {/* Confirmar email address input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='repetirEmail'
                    id="confirmarEmail"
                    type="email"
                    placeholder="name@example.com"
                    value={inputR.repetirEmail}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarEmail(e)
                    }}
                    onBlur={() => handleShowMensaje("repetirEmail")}
                />
                <label htmlFor="confirmarEmail">Confirmar dirección de email</label>

                {showMensaje.repetirEmail &&
                    <p className='text-danger'> Por favor, ingrese su email. </p>
                }

                {!verificacionEmail &&
                    <p className='text-danger'> El email no es válido o los campos no coinciden. </p>
                }
            </div>

            {/* Password input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='contraseña'
                    type="password"
                    placeholder="Contraseña"
                    value={inputR.contraseña}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarContraseña(e)
                    }}
                    onBlur={() => handleShowMensaje("contraseña")}
                />
                <label htmlFor="contraseña">Contraseña</label>

                {showMensaje.contraseña &&
                    <p className='text-danger'> Por favor, ingrese su contraseña. </p>
                }

                {!verificacionContraseña &&
                    <p className='text-danger'> Las contraseñas no coinciden. </p>
                }
            </div>

            {/* Confirmar password input */}
            <div className="form-floating mb-3">
                <input
                    className="form-control"
                    name='repetirContraseña'
                    id="repetirContraseña"
                    type="password"
                    placeholder="Repetir contraseña"
                    value={inputR.repetirContraseña}
                    onChange={(e) => {
                        handleChange(e)
                        handleVerificarContraseña(e)
                    }}
                    onBlur={() => handleShowMensaje("repetirContraseña")}
                />
                <label htmlFor="repetirContraseña">Repetir contraseña</label>

                {showMensaje.repetirContraseña &&
                    <p className='text-danger'> Por favor, ingrese su contraseña. </p>
                }

                {!verificacionContraseña &&
                    <p className='text-danger'> Las contraseñas no coinciden. </p>
                }
            </div>

            <div className="d-grid">
                <button onClick={handleRegistro} className="btn fondo text-white btn-lg mb-4 mt-4" type="button" >Registrarse</button>
            </div>

            <div className="d-grid">
                <button type='button' className='btn bg-danger btn-lg text-white btnGoogle mb-4' onClick={handleSignUpGoogle}>
                    <span className='iconBtnGoogle'> <i className="bi bi-google"></i> </span>
                    <span className='textoBtnGoogle'> Inicia con Google </span>
                </button>
            </div>
        </div>
    );
}

export default InputsRegistrarse;
