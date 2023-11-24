import React, { useState } from 'react'
import "./styles.css"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"
import arrowDown from "../../assets/arrowDown.png"
import { useNavigate } from 'react-router-dom'


const NavBar = () => {

  const [modalMenu, setModalMenu] = useState(false)
 const navigate = useNavigate()
  const goToPage = (url)=>{
    navigate(url)
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
        </ul>
        <div onClick={() => {
          setModalMenu(!modalMenu)
        }}>
          <img src={profile} className='profile' alt="" />
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
            </ul>
          }
        </div>

      </section>
    </div>
  )
}

export default NavBar