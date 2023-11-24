import React from 'react'
import "./styles.css"

const FormRegister = ({condition, setCondition}) => {
  return (
    <form className='form-register'>
        <legend>Crear Cuenta</legend>
        <div className='camp-register'>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder='Nombre y Apellido'/>
        </div>
        <div className='camp-register'>
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder='Digite su usuario'/>
        </div>
        <div className='camp-register'>
            <label htmlFor="">Contraseña</label>
            <input type="password" placeholder='Cree una contraseña'/>
        </div>
        <p>Ya tienes cuenta? entonces <span onClick={()=>{
            setCondition(true)
        }}>Inicia Sesion</span></p>
        <button>Crear Usuario</button>
        
    </form>
  )
}

export default FormRegister