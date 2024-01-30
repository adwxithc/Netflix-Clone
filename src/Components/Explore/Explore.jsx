import React,{useEffect, useState} from 'react'
import axios from '../../axios'
import { API_KEY } from '../../Constands/Constands'
import RowPost from '../RowPost/RowPost'

function Explore(props) {
    const {
        handleShowPreview
       
    }=props
    const[genrs,setgenrs]=useState([])

    useEffect(()=>{
        const getGeners=async()=>{
            try {
            const response=await axios.get(`/genre/movie/list?language=en&api_key=${API_KEY}`)
            
            setgenrs(response.data.genres)
                
            } catch (error) {
                console.log(error);
            }
        }
        getGeners()
    },[])
  return (
    <>
    {
    genrs.map(genr=><RowPost  handleShowPreview={handleShowPreview} title={genr.name} key={genr.id} url={`/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genr.id}&api_key=${API_KEY}`}/>)
    }
      
    </>
  )
}

export default Explore
