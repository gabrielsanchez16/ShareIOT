import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios'

const FormLogin = ({ condition, setCondition }) => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(false)
    const [userErr, setUserErr] = useState(false)
    const [messageErr, setMessageErr] = useState("")

    const login = (e) => {
        e.preventDefault()
        if (password === "" || user === "") {
            setErr(true)
            setMessageErr("Todos los campos son obligatorios")
            setTimeout(() => {
                setErr(false)
            }, 3000);
        } else {
            axios.get("http://localhost:8000/api/v1/usuario/login",{params:{
                "user_name":user,
                "password":password
            }}
            )
                .then((res) => {
                        localStorage.setItem("user_login",JSON.stringify(res.data.user))
                        window.location.reload(true);
                        console.log(res.data)
                })
                .catch(err => {
                    setUserErr(true)
                    setMessageErr(err.response.data.message)
                    console.log(err.response.data.message)
                    setTimeout(() => {
                        setUserErr(false)
                    }, 3000);
                })
        }

    }

    return (
        <form onSubmit={login} className='form-register'>
            <legend>Iniciar Sesion</legend>
            <div className='camp-register'>
                <label htmlFor="">Usuario</label>
                <input type="text" placeholder='Digite su usuario' onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className='camp-register'>
                <label htmlFor="">Contraseña</label>
                <input type="password" placeholder='Cree una contraseña' onChange={(e) => setPassword(e.target.value)} />
            </div>
            {
                err &&
                <p className='error-form'>
                    {messageErr}
                </p>
            }
            {
                userErr &&
                <p className='error-form'>
                    {messageErr}
                </p>
            }

            <p>No tienes cuenta? entonces <span onClick={() => {
                setCondition(false)
            }}>Crear Cuenta</span></p>
            <button >Iniciar Sesion</button>

        </form>
    )
}

export default FormLogin