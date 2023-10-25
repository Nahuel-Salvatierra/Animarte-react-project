import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useAuth } from '../../../context/userContext';     //Obtenemos el acceso al contexto. este es el hook personalizado donde se accede a las funciones y valores proporcionados por el contexto de autentificación.
// Importaciones Google Login
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// Css
import './InputIniciarSesion.css'

function InputsIniciarSesion() {
    
    
    // Estados para los campos del formulario
    const [inputIS, setInputIS] = useState({
        email: "",
        contraseña: "",
    });
    
    const [showMensaje, setShowMensaje] = useState({
        email: false,
        contraseña: false,
    });
    
    //Autentificación de usuario
    const { setUserRole } = useAuth();                     //Obtenemos el hook par acceder al estado "setUserRole". Con éste actualizaremos el rol del usuario.
    
    useEffect(() => {
        const loguearUsuarioJSON = window.localStorage.getItem("loguearUsuario");       //llamamos al localStorage por su "Id"
        if (loguearUsuarioJSON) {                                                        //localStorage solo puede almacenar Strings. Por eso lo volvemos a obtener como JSON.
            const usuario = JSON.parse(loguearUsuarioJSON);                             //Recuperamos el usuario y lo volvemos a obtener como JSON
            if (usuario.email && usuario.role) { setUserRole(usuario.role) };              //actualizamos el estado.
        }
    }, []);
    // Mensaje de Error para los usuarios no verificados
    const [errorMensajeIniciarSesion, setErrorMensajeIniciarSesion] = useState(null);


    //Codigo de los Estados del formulario.
    //Evaluar si el formulario el estado del input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputIS({
            ...inputIS,
            [name]: value,
        });
    }
    //Mostramos mensaje en caso de que los inputIS estén vacíos
    const handleShowMensaje = (mensaje) => {
        setShowMensaje({
            ...showMensaje,
            [mensaje]: inputIS[mensaje] === "",
        })
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

    function handleLoginGoogle() {
        
        signInWithPopup(auth, provider)
            .then((result) => {
                // Obtenemos Google Access Token. y obtenemos acceso a Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // Informacion de usuario
                const user = result.user;
                const email = result.email;
                console.log( "Iniciaste Sesion con Google Exisotos: " + user.email)
                
                fetch('http://localhost:7000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                })
                    .then(response => {
                        if (response.ok) {
                            handleIniciarSesion()
                            console.log("Verificación de cuenta en la base de datos Éxito");
                        } else {
                            console.log("Cuenta no valida");
                            setErrorMensajeIniciarSesion("Este usuario no esta registrado")
                        }
                    })
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


    //---------------------------------------------------------------- //
    // Fetch
    const handleIniciarSesion = () => {
        // Mensaje de error


        // Ojb de Usuario
        const userDataLogin = {                                         //datos para fetch
            email: inputIS.email,
            password: inputIS.contraseña,
        }

        // Fetch
        fetch('http://localhost:7000/auth/login', {                     //Cambio de url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDataLogin),                        //recibe los datos
        })
            .then(response => {
                if (response.ok) {
                    console.log("inicio de sesión exitoso");
                    console.log(response);
                    return response.json();                     //convertimos el dato obtenido a .json
                } else {
                    setErrorMensajeIniciarSesion("Este usuario no esta registrado")
                }
            })
            .then((data) => {                                   //Obtenemos los datos en formato .json
                console.log("mostramos los datos")

                //Token
                console.log("ver los datos:", data)             //Datos del ID y Token obtenidos
                const token = data.token;                       //obtener token
                const decodedToken = jwt_decode(token);         //descifrado


                if (decodedToken) {
                    const usuarioRol = {
                        email: inputIS.email,
                        role: decodedToken.role,
                    }        //obtener Email y rol
                    window.localStorage.setItem(
                        "loguearUsuario", JSON.stringify(usuarioRol)     //LocalStorage se transforma a string y obtenemos el rol del usuario. "loguearUsuario" es el ID que llamaremos en userEffect para que guarde al usuario
                    )
                    setUserRole(usuarioRol.role);                        //Usamos el estado del hook personalizado donde actualizamos el estado del rol del usuario.
                } else {
                    console.log("Token no valido")                       //MANDAR ALGÚN MSJ DE ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }
            })
            .catch(error => {
                console.log("Error de red", error);
            })
    }
    
    
    return (
        <div>
            {/* Email address input */}
            <div className="form-floating mb-4 mt-4">
                <input
                    className="form-control"
                    name='email'
                    type="email"
                    placeholder="name@example.com"
                    value={inputIS.email}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("email")}
                />
                <label htmlFor="email">Dirección de email</label>

                {showMensaje.email &&
                    <p className='text-danger'> Por favor, ingrese su email. </p>
                }
            </div>


            {/* Password input */}
            <div className="form-floating mb-4">
                <input
                    className="form-control"
                    name='contraseña'
                    type="password"
                    placeholder="Contraseña"
                    value={inputIS.contraseña}
                    onChange={handleChange}
                    onBlur={() => handleShowMensaje("contraseña")}
                />
                <label htmlFor="contraseña">Contraseña</label>

                {showMensaje.contraseña &&
                    <p className='text-danger'> Por favor, ingrese su contraseña. </p>
                }
            </div>



            <div className="d-grid">
                <button onClick={handleIniciarSesion} className="btn fondo btn-lg text-white mb-4 " id="submitButton" type="button" >Iniciar Sesión</button>
            </div>

            {errorMensajeIniciarSesion && (
                <p className="text-danger">{errorMensajeIniciarSesion}</p>
            )}

            <div className="d-grid">
                <button type='button' className='btn bg-danger btn-lg text-white btnGoogle mb-4' onClick={handleLoginGoogle}>
                    <span className='iconBtnGoogle'> <i className="bi bi-google"></i> </span>
                    <span className='textoBtnGoogle'> Inicia con Google </span>
                </button>
            </div>
        </div>
    );
}

export default InputsIniciarSesion



