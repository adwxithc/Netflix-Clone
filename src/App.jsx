
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Explore from './Components/Explore/Explore'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import PreviewModal from './Components/PreviewModal/PreviewModal'


function App() {
 const[showPreview,setShowPreview]=useState(false)
 const [previewMovie, setPreviewMovie]=useState(null)
  const handleShowPreview=(movie)=>{
    setPreviewMovie(movie)
    setShowPreview(true)
    console.log('&7777777777',movie);
   
  }
const handleClosePreview=()=>{
  setShowPreview(false)
  setPreviewMovie(null)
}

  return (
    <>
    <NavBar />
    <Banner />
    <Explore handleShowPreview={handleShowPreview}  />
    <Footer />
    { showPreview && <PreviewModal handleClosePreview={handleClosePreview} previewMovie={previewMovie}/> }
    
    </>
  )
}

export default App
