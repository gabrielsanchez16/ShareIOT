import React, { useEffect, useState } from 'react'
import person from "../../../assets/profile.png"
import heartVacio from "../../../assets/heartVacio.png"
import heartFull from "../../../assets/heartFull.png"
import comments from "../../../assets/comments.png"
import share from "../../../assets/share.png"
import send from "../../../assets/send.png"
import "./styles.css"
import axios from 'axios'






const AllArticle = ({ item }) => {
    const [err, setErr] = useState(false)
    const [articleInfo, setArticleInfo] = useState()
    const [commentText, setCommentText] = useState("")
    const generateUniteId = ()=>{
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid
    }

    const addComment = () => {
        if (commentText === "") {
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 3000);
        } else {
            const commentBody = {
                "usuario": item?.usuario,
                "id":generateUniteId(),
                "comment": commentText
            }
            const newComments = item?.comments

            const data = {
                "usuario": item?.usuario,
                "id": item?.id,
                "user_id": item?.user_id,
                "carrera": item?.carrera,
                "post": item?.post,
                "likes": item?.likes,
                "comments": newComments
            }
            axios.put(`http://localhost:3000/articles/${item?.id}/`, data)
                .then((res) => {
                    console.log(res.data)
                    // window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    const addLike = () => {
        const data = {
            "usuario": item?.usuario,
            "id": item?.id,
            "user_id": item?.user_id,
            "carrera": item?.carrera,
            "post": item?.post,
            "likes": item?.likes + 1,
            "comments": item?.comments
        }
        axios.put(`http://localhost:3000/articles/${item?.id}/`, data)
            .then((res) => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getArticle = () => {
        axios.get(`http://localhost:3000/articles?id=${item?.id}&user_id=${item?.user_id}`)
            .then((res) => {
                setArticleInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getArticle()
    }, [])

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
                        <img src={heartVacio} alt="" onClick={() => {
                            addLike()
                        }} />
                        <span>{item?.likes}</span>
                    </div>
                    <div className='individual-actions'>
                        <img src={comments} alt="" />
                        <span>
                            {item?.comments?.length}
                        </span>
                    </div>
                    <div>
                        <img src={share} alt="" />
                    </div>

                </div>
                <section className='all-comments'>
                    {
                        item?.comments?.length === 0 ?
                            <p>
                                No hay comentarios
                            </p>
                            :

                            item?.comments?.map((item, key) => {
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
                    <input type="text" className={err ? "place-red" : "place-normal"} placeholder={err ? "Llena el campo para comentar" : "Tu comentario"} onChange={(e) => { setCommentText(e.target.value) }} />
                    <img src={send} alt="" onClick={addComment} />
                </section>
            </section>
        </div>
    )
}

export default AllArticle