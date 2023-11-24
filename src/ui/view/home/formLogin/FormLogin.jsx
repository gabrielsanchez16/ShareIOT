import React from 'react'

const FormLogin = ({condition,setCondition}) => {
    return (
        <form className='form-register'>
        <legend>Iniciar Sesion</legend>
        <div className='camp-register'>
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder='Digite su usuario'/>
        </div>
        <div className='camp-register'>
            <label htmlFor="">Contraseña</label>
            <input type="password" placeholder='Cree una contraseña'/>
        </div>
        <p>No tienes cuenta? entonces <span onClick={()=>{
            setCondition(false)
        }}>Crear Cuenta</span></p>
        <button>Iniciar Sesion</button>
        
    </form>
    )
}

export default FormLogin