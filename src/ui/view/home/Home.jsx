import React, { useState } from 'react'
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

const Home = () => {
    
    const [conditionForm, setConditionForm] = useState(false)

    const articles = [
        {
            usuario:"Fabiola Sanchez",
            carrera:"ANI",
            post:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur ratione quia suscipit itaque animi, fugiat hic quis iusto, culpa provident ipsam. Eaque consequatur commodi minus ut. Aperiam, natus quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis impedit modi eos non cumque consequatur distinctio veniam aspernatur nisi officia debitis, exercitationem, neque error eius facere atque. Voluptas, illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cumque odit ducimus quos. Reprehenderit tempore rerum amet aliquam blanditiis, esse unde molestiae itaque quod, nihil omnis tenetur iste ab! Tempora? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa reprehenderit odit incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam.",
            likes:24,
            comments:[
                {
                    usuario:"gabriel sanchez",
                    comment:"Culpa reprehenderit odit incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam."
                },
                {
                    usuario:"felipe masias",
                    comment:"incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam."
                }
            ]

        },
        {
            usuario:"Gabriel Sanchez",
            carrera:"Ing Sistemas",
            post:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur ratione quia suscipit itaque animi, fugiat hic quis iusto, culpa provident ipsam. Eaque consequatur commodi minus ut. Aperiam, natus quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis impedit modi eos non cumque consequatur distinctio veniam aspernatur nisi officia debitis, exercitationem, neque error eius facere atque. Voluptas, illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cumque odit ducimus quos. Reprehenderit tempore rerum amet aliquam blanditiis.",
            likes:12,
            comments:[
                {
                    usuario:"Fabiola sanchez",
                    comment:"Culpa reprehenderit odit incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam."
                },
                {
                    usuario:"ruben Perez",
                    comment:"incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam."
                }
            ]

        },
        {
            usuario:"Fanor lopez",
            carrera:"Arquitectura",
            post:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur ratione quia suscipit itaque animi, fugiat hic quis iusto, culpa provident ipsam. Eaque consequatur commodi minus ut. Aperiam, natus quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis impedit modi eos non cumque consequatur distinctio veniam aspernatur nisi officia debitis, exercitationem, neque error eius facere atque. Culpa reprehenderit odit incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam.",
            likes:44,
            comments:[
                {
                    usuario:"Lupe Calderon",
                    comment:"Culpa reprehenderit odit incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam."
                },
                {
                    usuario:"Javier palomino",
                    comment:"incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam."
                }
            ]

        },{
            usuario:"Fanor lopez",
            carrera:"Arquitectura",
            post:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur ratione quia suscipit itaque animi, fugiat hic quis iusto, culpa provident ipsam. Eaque consequatur commodi minus ut. Aperiam, natus quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis impedit modi eos non cumque consequatur distinctio veniam aspernatur nisi officia debitis, exercitationem, neque error eius facere atque. Culpa reprehenderit odit incidunt ad atque temporibus dolorum non fuga. Velit, est. Dolor sunt magnam natus nostrum corrupti ducimus accusantium at nam.",
            likes:44,
            comments:[
                
            ]

        }
    ]


  return (
    <div className='home'>
        {/* <section className='Banner-login-register'>
            <h1>ShareIOT</h1>
            <p>Comparte, aprende y crece juntos: Accede a nuestro sitio web y únete a estudiantes universitarios que comparten información para enriquecer la experiencia académica</p>
        </section>
        <section className='content-forms'>
            {
                conditionForm === false &&
                <FormRegister setCondition={setConditionForm}/>
            }
            {
                conditionForm === true &&
                <FormLogin setCondition={setConditionForm}/>
            }
        </section> */}
        <BannerNews/>
        <section className='all-article'>
            <h3 className='title-all-article'>Foro ShareIOT</h3>
            {
                articles.map((item,key)=>{
                    return(
                        <AllArticle key={key} item={item}/>
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
    </div>
  )
}

export default Home