import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import FormRegister from './formRegister/FormRegister'
import FormLogin from './formLogin/FormLogin'
import AllArticle from './allArticle/AllArticle'
import poster1 from '../../assets/poster1.jpeg'
import poster2 from '../../assets/poster2.jpeg'
import poster3 from '../../assets/poster3.jpeg'
import poster4 from '../../assets/poster4.jpeg'
import poster5 from '../../assets/poster5.jpeg'
import poster6 from '../../assets/poster6.jpeg'
import BannerNews from './bannerNews/BannerNews'
import axios from 'axios'

const Home = () => {

    const [conditionForm, setConditionForm] = useState(false)
    const [articles, setArticles] = useState([])
    const infoUser = JSON.parse(localStorage.getItem("user_login"))
    const [showForm, setShowForm] = useState(false)
    

    const getArticles = () => {
        axios.get("http://localhost:8000/api/v1/post")
            .then(res => {
                setArticles(res.data.Posts)
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        if(infoUser == null){
            setShowForm(false)
        }else if(infoUser.length == 0){
            setShowForm(false)
        }else{
            setShowForm(true)
        }
        getArticles()
    }, [])


    return (
        <div className='home'>
            {
                showForm == true &&
                   
                <>
                        <BannerNews />
                        <section className='all-article'>
                            <h3 className='title-all-article'>Foro ShareIOT</h3>
                            {
                                articles.map((item, key) => {
                                    return (
                                        <AllArticle key={key} item={item} />
                                    )
                                })
                            }
                        </section>
                        <section className='events-university'>
                            <h3 className='title-all-article'>Eventos Universitarios</h3>
                            <div className='content-all-poster'>
                                <img src={poster1} alt="" />
                                <img src={poster2} alt="" />
                                <img src={poster3} alt="" />
                                <img src={poster4} alt="" />
                                <img src={poster5} alt="" />
                                <img src={poster6} alt="" />
                            </div>
                        </section>
                    </>
                    
                    

            }
            {
                showForm === false &&
                 <>
                        <section className='Banner-login-register'>
                            <h1>ShareIOT</h1>
                            <p>Comparte, aprende y crece juntos: Accede a nuestro sitio web y únete a estudiantes universitarios que comparten información para enriquecer la experiencia académica</p>
                        </section>
                        <section className='content-forms'>
                            {
                                conditionForm === false &&
                                <FormRegister setCondition={setConditionForm} />
                            }
                            {
                                conditionForm === true &&
                                <FormLogin setCondition={setConditionForm} />
                            }
                        </section>
                    </>
            }


        </div>
    )
}

export default Home