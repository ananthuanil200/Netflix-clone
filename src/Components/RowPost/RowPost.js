import React from 'react'
import './RowPost.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {IMAGE_URL} from '../../constants/constants'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data);
    }).catch(err=>{
      // alert('Network Error')
    })

  })
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${IMAGE_URL+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
    </div>
  )
}

export default RowPost
