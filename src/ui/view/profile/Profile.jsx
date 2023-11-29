import React, { useEffect, useState } from 'react'
import "./styles.css"
import photo from "../../assets/profile.png"
import axios from 'axios'
import AllArticle from '../home/allArticle/AllArticle'

const Profile = () => {

    const infoUser = JSON.parse(localStorage.getItem("user_login"))
    const [allMyPost, setAllMyPost] = useState([])
console.log(infoUser)

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/post/byUser", {
            params: {
                user_id:infoUser?.id
            }
        })
            .then((res) => {
                setAllMyPost(res.data.post)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    return (
        <div>
            <div className="profile-container">
                <div className="profile-header">
                    <img src={photo} alt="User" className="profile-photo" />
                    <h2>{infoUser.user_name}</h2>
                    <p>{infoUser?.name_complete}</p>
                    <p>{infoUser?.carrera}</p>
                </div>
                <div className="profile-posts">
                    <h3 style={{
                                margin:"2rem"
                            }}>Publicaciones:</h3>
                    {
                        allMyPost.length === 0 ?
                            <h4 >No hay posts</h4>
                            :
                            allMyPost.map((post, index) => {
                                return (
                                   <AllArticle key={index} item={post}/>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile