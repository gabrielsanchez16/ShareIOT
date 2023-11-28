import React, { useState } from 'react'
import "./styles.css"
import axios from "axios"

const FormRegister = ({condition, setCondition}) => {

const [name, setName] = useState("")
const [carrera, setCarrera] = useState("")
const [user, setUser] = useState("")
const [password, setPassword] = useState("")
const [err, setErr] = useState(false)
const [correctCreate, setCorrectCreate] = useState(false)

const generateUniteId = ()=>{
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid
}


const createUser = (e)=>{
    e.preventDefault()
    const data = {
        "name_complete":name,
        "user_name":user,
        "carrera":carrera,
        "password":password
    }
    if(name === "" || carrera === "" || user === "" || password === ""){
        setErr(true)
        setTimeout(() => {
            setErr(false)
        }, 3000);
    }else{
        axios.post("http://localhost:8000/api/v1/usuario/register",data)
        .then((res)=>{
                setCorrectCreate(true)
                setTimeout(() => {
                    setCorrectCreate(false)
                    setCondition(true)
                }, 2000);
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

  return (
    <form onSubmit={createUser} className='form-register'>
        <legend>Crear Cuenta</legend>
        <div className='camp-register'>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder='Nombre y Apellido' onChange={(e)=>{
                setName(e.target.value)
            }}/>
        </div>
        <div className='camp-register'>
            <label htmlFor="">Carrera</label>
            <input type="text" placeholder='Que estudias?' onChange={(e)=>{
                setCarrera(e.target.value)
            }}/>
        </div>
        <div className='camp-register'>
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder='Digite su usuario' onChange={(e)=>{
                setUser(e.target.value)
            }}/>
        </div>
        <div className='camp-register'>
            <label htmlFor="">Contraseña</label>
            <input type="password" placeholder='Cree una contraseña' onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>
        {       
         err &&
                <p className='error-form'>
                    Todos los campos son obligatorios
                </p>
        }
        {       
         correctCreate &&
                <p className='correct-create-form'>
                    Se creo tu cuenta con exito
                </p>
        }
        <p>Ya tienes cuenta? entonces <span onClick={()=>{
            setCondition(true)
        }}>Inicia Sesion</span></p>
        <button>Crear Usuario</button>
        
    </form>
  )
}

export default FormRegister