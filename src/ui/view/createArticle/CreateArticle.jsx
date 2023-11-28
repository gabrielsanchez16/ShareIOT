import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateArticle = () => {

  const [articleTxt, setarticleTxt] = useState("")
  const [err, setErr] = useState(false)
  const userLog = JSON.parse(localStorage.getItem("user_login"))
  const navigate = useNavigate()

  const handleSubmitArticle = (e) => {
    e.preventDefault()
    const data =
    {
      "user_name": userLog?.user_name,
      "user_id": userLog?.id,
      "carrera": userLog?.carrera,
      "info": articleTxt,
      "likes": 0
    }

    if (articleTxt === "") {
      setErr(true)
      setTimeout(() => {
        setErr(false)
      }, 3000);
    } else {
      axios.post("http://localhost:8000/api/v1/post/register", data)
        .then((res) => {
          navigate("/")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className='content-create-article'>
      <h2>Crear Publicacion</h2>
      <p>Comparte, crea y divierte en la comunidad <span>ShareIOT</span></p>
      <form className='form-article' onSubmit={handleSubmitArticle}>
        <textarea name="" id="" placeholder='Escribe tu articulo' onChange={(e) => {
          setarticleTxt(e.target.value)
        }}></textarea>
        {
          err &&
          <p className='error-form'>
            Todos los campos son obligatorios
          </p>
        }
        <button>Crear Articulo</button>
      </form>
    </div>
  )
}

export default CreateArticle