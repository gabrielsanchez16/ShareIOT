import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './ui/view/home/Home'
import Footer from './ui/view/footer/Footer'
import NavBar from './ui/view/navbar/NavBar'
import CreateArticle from './ui/view/createArticle/CreateArticle'
import { useState, useEffect } from 'react'

function App() {
  const infoUser = JSON.parse(localStorage.getItem("user_login"))
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
      if(infoUser == null){

         return setShowForm(false)
      }else if(infoUser?.length == 0){
          setShowForm(false)
      }else{
          setShowForm(true)
      }
      
  }, [])

  console.log(infoUser)

  return (
    <>
    {
      showForm == true &&
      <NavBar/>
    }
      <Routes>
        //aqui va todo el contenido de la app osea las rutas
        <Route path='/' element={<Home />} />
        <Route path='/create-article' element={<CreateArticle/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
