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
    const [articleInfo, setArticleInfo] = useState([])
    const [commentText, setCommentText] = useState("")
    const userLog = JSON.parse(localStorage.getItem("user_login"))

    const addComment = () => {
        if (commentText === "") {
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 3000);
        } else {
            const commentBody = {
                "comment": commentText,
                "user_id":userLog?.id,
                "user_name": userLog?.user_name,
                "post_id":item?.id
            }

            axios.post(`http://localhost:8000/api/v1/message/register`, commentBody)
                .then((res) => {
                    console.log(res.data)
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    const addLike = () => {
        const data = {
            "post_id": item?.id,
            "like": item?.likes + 1,
        }
        axios.put(`http://localhost:8000/api/v1/post`, data)
            .then((res) => {
                console.log(res.data)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getArticle = () => {
        axios.get(`http://localhost:8000/api/v1/message/bypostid`,{params:{
            post_id:item?.id
        }})
            .then((res) => {
                setArticleInfo(res.data.comment)
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
                    <h3>{item?.user_name}</h3>
                    <p>{item?.carrera}</p>
                </div>

            </section>
            <section className='content-article'>
                <p>
                    {
                        item?.info
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
                            {articleInfo.length}
                        </span>
                    </div>
                    <div>
                        <img src={share} alt="" />
                    </div>

                </div>
                <section className='all-comments'>
                    {
                         articleInfo.length == 0 ?
                            <p>
                                No hay comentarios
                            </p>
                            :

                            articleInfo.map((item1, key) => {
                                return (
                                    <div className='individual-comment' key={key}>
                                        <div className='header-comment'>
                                            <img src={person} alt="" />
                                            <h3>{item1?.user_name}</h3>
                                        </div>
                                        <div className='body-comment'>
                                            <p>{item1?.comment}</p>
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