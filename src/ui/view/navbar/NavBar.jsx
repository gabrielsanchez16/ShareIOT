import React, { useState } from 'react'
import "./styles.css"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"
import arrowDown from "../../assets/arrowDown.png"
import { useNavigate } from 'react-router-dom'


const NavBar = () => {

  const [modalMenu, setModalMenu] = useState(false)
  const infoUser = JSON.parse(localStorage.getItem("user_login"))
 const navigate = useNavigate()
  const goToPage = (url)=>{
    navigate(url)
  }

  const closeSession = ()=>{
    localStorage.removeItem("user_login")
    window.location.reload()
  }

  return (
    <div className='Navbar'>
      <section className='navbar-content-logo'>
        <img src={logo} className='logo' alt="" />
        <div className='search'>
          <input type="text" placeholder='Buscar articulo' />
        </div>
      </section>
      <section className='navbar-content-menu'>
        <ul className='display'>
          <li onClick={()=>{
            goToPage("/")
            }}>
            Inicio
          </li>
          <li>
            Mi perfil
          </li>
          <li onClick={()=>{
            goToPage("/create-article")
            }}>
            Crear Publicacion
          </li>
          <li onClick={()=>{
            closeSession()
            }}>
            Cerrar Sesion
          </li>
        </ul>
        <div onClick={() => {
          setModalMenu(!modalMenu)
        }}>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", fontSize:"12px", fontWeight:"700", textTransform:"uppercase"}}>
            <img src={profile} className='profile' alt="" />
            <p>{infoUser?.user_name}</p>
          </div>
          
          <img src={arrowDown} className='arrow-down' alt="" />
          {
            modalMenu &&
            <ul className='show'>
              <li onClick={()=>{
            goToPage("/")
            }}>
                Inicio
              </li>
              <li>
                Mi perfil
              </li>
              <li onClick={()=>{
            goToPage("/create-article")
            }}>
                Crear Publicacion
              </li>
              <li onClick={()=>{
            closeSession()
            }}>
            Cerrar Sesion
          </li>
            </ul>
          }
        </div>

      </section>
    </div>
  )
}

export default NavBar