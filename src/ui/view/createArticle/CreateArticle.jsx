import React from 'react'
import "./styles.css"

const CreateArticle = () => {
  return (
    <div className='content-create-article'>
        <h2>Crear Publicacion</h2>
        <p>Comparte, crea y divierte en la comunidad <span>ShareIOT</span></p>
        <form className='form-article' action="">
            <textarea name="" id="" placeholder='Escribe tu articulo'></textarea>
            <button>Crear Articulo</button>
        </form>
    </div>
  )
}

export default CreateArticle