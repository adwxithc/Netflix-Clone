import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import {IMAGE_URL,API_KEY} from '../../Constands/Constands';
import { BsBadgeHd } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import {IoIosPlay, IoMdAdd} from "react-icons/io"
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import './PreviewModal.css'
import axios from '../../axios'

function PreviewModal(props) {
    const {
        previewMovie,
        handleClosePreview
    }=props
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
      const [videoId,setVideoId] = useState('')
      useEffect(()=>{
        try {
            const getvideo=async()=>{
                const response=await axios.get(`/movie/${previewMovie.id}/videos?api_key=${API_KEY}`)
                const videos=response.data.results
                if(videos.length>0){
                   setTimeout(()=>{
                        setVideoId(videos[0].key)
                    },2000)
                }
                
            }
            getvideo()
        } catch (error) {
            console.log(error);
        }
       

      },[])
  return (
    <div className=' modal fixed top-0 left-0  w-full h-full   z-10 overflow-y-scroll cursor-pointer ' style={{backgroundColor:' rgba(0, 0, 0, 0.222)'}}>
       
            <div className='modal-content w-1/2 h-auto my-9 mx-auto rounded-xl overflow-y-hidden relative'>
                <div className='preview-visual   relative  h-[75vh]  bg-cover bg-no-repeat overflow-hidden cursor-pointer' style={{backgroundImage:`url(${previewMovie?IMAGE_URL+previewMovie.backdrop_path:''})`}} >
                    { videoId && <YouTube videoId={videoId} opts={opts} className='preview-trailer h-full w-full object-cover scale-125 ' />}
                    <div className=' absolute bottom-32 left-14 z-10 flex items-center'>
                        <button className='play-button'> <IoIosPlay className='banner-play-icon'/> <span>Play</span></button>

                            <button className=' round-btn'>
                                <IoMdAdd />
                            </button>
                            <button className='round-btn'>
                                <HiOutlineHandThumbUp />

                            </button>
                        
                 
                    </div>


                <div>
                        
                    </div>
                </div>
                <div className='preiew-info px-14 pb-14 h-full  rounded-b-xl overflow-y-hidden'>
                  <div className='grid grid-cols-3 gap-6'>
                        <div className='details-left col-span-2' >
                            <div className='flex items-center font-semibold mb-1'>
                                <span className='text-green-500 mr-3'>88% Match</span>
                                <span className='text-gray-400 mr-3'>{previewMovie.release_date}</span>
                                <BsBadgeHd />
                            </div>
                            <div>
                                {previewMovie.overview}
                            </div>
                        </div>
                        <div className='details-right col-span-1'>
                            <div className='mt-5'><span className='text-gray-400 '>Cast: </span> Elliot Page, Tom Hopper, David Castaneda, more</div>
                            <div className=' mt-5'><span className='text-gray-400'>Genrs:</span>Sci-Fi TV, TV Action & Adventure, US TV Show</div>
                            <div className=' mt-5'> <span className='text-gray-400 '>This show is:</span> Mind-Bending, Offbeat, Quirky</div>
                        </div>
                  </div>
                </div>

                <button className='close-btn absolute top-5 right-5' onClick={()=>{handleClosePreview()}}>
                    <IoMdClose className='' />
                </button>
            </div>
      
      
    </div>
  )
}

export default PreviewModal
