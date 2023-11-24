import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateArticle = () => {

  const [articleTxt, setarticleTxt] = useState("")
  const [err, setErr] = useState(false)
  const userLog = JSON.parse(localStorage.getItem("user_login"))
  const navigate = useNavigate()

  console.log(userLog)
  const generateUniteId = () => {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid
  }

  const handleSubmitArticle = (e) => {
    e.preventDefault()
    const data =
    {
      "usuario": userLog[0]?.username,
      "id": generateUniteId(),
      "user_id": userLog[0]?.id,
      "carrera": userLog[0]?.carrera,
      "post": articleTxt,
      "likes": 0,
      "comments": []
    }

    if (articleTxt === "") {
      setErr(true)
      setTimeout(() => {
        setErr(false)
      }, 3000);
    } else {
      axios.post("http://localhost:3000/articles", data)
        .then((res) => {
          console.log(res.data)
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