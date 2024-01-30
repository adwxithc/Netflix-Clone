import React,{useEffect,useState} from 'react'
import './Banner.css'
import { IoIosPlay,IoIosInformationCircleOutline } from "react-icons/io";
import {API_KEY,IMAGE_URL} from '../../Constands/Constands'
import axios from '../../axios';
import YouTube from 'react-youtube';


function Banner() {
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

  const [bannerMovie,setBannerMovie]=useState('')
  const [bannerVideoId,setBannerVideoId] =useState(null)

  useEffect(()=>{
    const fetchData=async()=>{
      try {

      const response=await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      const random = Math.floor(Math.random()*(response.data.results.length-1))
      const movie=response.data.results[random]
        
      setBannerMovie(movie)

      const videoResponse=await axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}`)
      setTimeout(() => {
        const vedioId=videoResponse.data.results.find((item)=>{
              return ["Clip","Trailer","Teaser"].includes(item.type)
        })
        setBannerVideoId(vedioId?.key)

      }, 1500);
      
      
        
      } catch (error) {
        console.log('something went wrong',error)
      }
      
    }

    fetchData()
  },[])
  return (
    <div className='banner relative' style={{backgroundImage:`url(${bannerMovie?IMAGE_URL+bannerMovie.backdrop_path:''})`}} >
      <div className='banner-content'>
        <h1 className='banner-title'>{bannerMovie?bannerMovie.title:''}</h1>
        <p className='banner-description'>{bannerMovie?bannerMovie.overview:''}</p>
        <div className='banner-buttons'>
            <button className='play-button'> <IoIosPlay className='banner-play-icon'/> <span>Play</span></button>
            <button className='info-button'> <IoIosInformationCircleOutline className='banner-info-icon' /> <span>More Info</span></button>
        </div>
      </div>
      { bannerVideoId && <YouTube videoId={bannerVideoId} opts={opts} className='banner-video' />}
    
    </div>
  )
}

export default Banner
