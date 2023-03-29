import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../axios'
import {API_KEY,IMAGE_URL} from '../../constants/constants'
import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[0])
            console.log(response.data.results[0]);
        })
    },[])
  return (
    <div style={{backgroundImage:`URL(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}} className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
            </div>
            <div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
       </div>
       <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
