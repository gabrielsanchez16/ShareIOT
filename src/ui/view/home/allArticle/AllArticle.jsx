import React from 'react'
import person from "../../../assets/profile.png"
import heartVacio from "../../../assets/heartVacio.png"
import heartFull from "../../../assets/heartFull.png"
import comments from "../../../assets/comments.png"
import share from "../../../assets/share.png"
import send from "../../../assets/send.png"
import "./styles.css"



const AllArticle = ({ item }) => {
    return (
        <div className='card-article'>
            <section className='header-card-article'>
                <img src={person} alt="" />
                <div>
                    <h3>{item?.usuario}</h3>
                    <p>{item?.carrera}</p>
                </div>

            </section>
            <section className='content-article'>
                <p>
                    {
                        item?.post
                    }
                </p>
            </section>
            <section className='actions-article'>
                <div className='content-actions-buttons'>
                    <div className='individual-actions'>
                        <img src={heartVacio} alt="" />
                        <span>{item?.likes}</span>
                    </div>
                    <div className='individual-actions'>
                        <img src={comments} alt="" />
                        <span>
                            {item?.comments.length}
                        </span>
                    </div>
                    <div>
                        <img src={share} alt="" />
                    </div>

                </div>
                <section className='all-comments'>
                    {
                        item?.comments.length === 0 ?
                            <p>
                                No hay comentarios
                            </p>
                            :

                            item?.comments.map((item, key) => {
                                return (
                                    <div className='individual-comment' key={key}>
                                        <div className='header-comment'>
                                            <img src={person} alt="" />
                                            <h3>{item?.usuario}</h3>
                                        </div>
                                        <div className='body-comment'>
                                            <p>{item?.comment}</p>
                                        </div>
                                        <div className='actions-comment'>
                                            <span>Me gusta</span>
                                            <span>Responder</span>
                                        </div>
                                    </div>
                                )
                            })}

                </section>
                <section className='content-make-comments'>
                    <input type="text" placeholder='Tu comentario' />
                    <img src={send} alt="" />
                </section>
            </section>
        </div>
    )
}

export default AllArticle