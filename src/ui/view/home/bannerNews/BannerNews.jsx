import React from 'react'
import "./styles.css"
import universidad from "../../../assets/universidad.jpeg"

const BannerNews = () => {
  return (
    <div className='banner-news'>
        <img src={universidad} alt="" />
        <div className='efect-black'>
            <h1>ShareIOT</h1>
        </div>
    </div>
  )
}

export default BannerNews