import React from 'react'
import './Navbar.css'
import Search_icon from '../../assets/search.svg'
import Menu from '../../assets/align-left.svg'
import Bell from '../../assets/bell.svg'
import Upload from '../../assets/upload.svg'
import More from '../../assets/grid.svg'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <>
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={Menu} alt="menu-icon" />
            <Link to='/'><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="" />
            </Link>
        </div>
        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
             <input type="text" placeholder='Search...' />
             <img src={Search_icon} alt="search-icon" />
            </div>
        </div>
        <div className='nav-right flex-div'>
            <img src={Upload} alt="upload-icon" />
            <img src={More} alt="more-icon" />
            <img src={Bell}alt="notification-icon" />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10PKiP_JgIwAEgEN0iQjXUcx0HfCFmuB-rRDZQkj-0GxtZgb7hZmX9Ks4HEAAgY0832w&usqp=CAU' alt="user-icon" className='user-icon'/>
        </div>
    </nav>
    </>
  )
}

export default Navbar

