import React, { useState } from 'react'
import {IMAGE_URL} from '../../Constands/Constands'
import YouTube from 'react-youtube'

function SingleMovie(props) {


    const [videoId,setVideoId]= useState(null)
    const {
        handleShowPreview,
        movie
    }=props
    const handleMouseEnter=()=>{
        console.log('started');
        setVideoId("8ixwyQmYseY")
    }
    const handleMouseLeave=()=>{
        console.log('ho');
        setVideoId(null)
    }

    const opts={
        width:'100%',
        height:'100%',
        playerVars: {
          autoplay: 1,
          loop: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
        },
        
      }

  return (
    <div className='min-w-[220px] relative mr-2'  onClick={()=>handleShowPreview(movie)} >
    
    { 
    videoId ?
    <div className='min-w-[220px] absolute rounded-[2px]'>
        <YouTube className='object-cover scale-125' videoId={videoId} opts={opts} />
    </div>

    
    :
    <img className='poster   rounded-[2px]' src={IMAGE_URL+movie.backdrop_path} alt="poster" />
}
    </div>
  )
}

export default SingleMovie
