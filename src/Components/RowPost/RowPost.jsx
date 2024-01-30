import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { IMAGE_URL } from '../../Constands/Constands'
import SingleMovie from '../SingleMovie/SingleMovie'

function RowPost(props) {
  const {
    handleShowPreview,

    title,
    url
  }=props
 

  const [movies, setMovies]=useState([])
  
  useEffect(()=>{
   
      const getMovies=async ()=>{
        const response=await axios.get(url)
        const movies=response.data.results
        setMovies(movies)
        
      }
      getMovies()
  },[])
  return (
    <div className='row px-16 relative top-[-5rem] mb-[3vw]'>
        <h1 className='text-[1.5em] font-[500]'>{title}</h1>
        <div className='posters flex overflow-x-scroll overflow-y-hidden'>
          {
            movies.map(movie=>
              <SingleMovie handleShowPreview={handleShowPreview} movie={movie} key={movie.id}/>

            )
              
            
          }
        
     
        </div>
      
    </div>
  )
}

export default RowPost
