import React,{useState, useEffect} from 'react'
import './NavBar.css'
import { IoSearch } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>0)
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
    <div className={`navBar ${isScrolled&&'scrolled'}`}>

    <div className='navigation'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

        <ul className='primary-navigation'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
    </div>


      
    <div className='secondary-navigation'>
    <IoSearch className='nav-search'/>
    <HiOutlineBell className='nav-bell'/>
    <img className='avathar secondary-nav-item' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avathar" />

    </div>
    </div>
  )
}

export default NavBar
