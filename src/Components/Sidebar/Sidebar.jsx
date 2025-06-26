import React from 'react';
import './Sidebar.css';
import MrBeast from '../../assets/mrbeast.jpg';
import PewDiePie from '../../assets/pewdiepie.jpg';
import NasDaily from '../../assets/nasDaily.jpeg';
import justien from '../../assets/justien.jpeg';
import Minutes from '../../assets/5-minutes-craft.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHouse, faCar, faBasketball, faVideo, faMicrochip, faMusic, faBlog, faNewspaper, faUserPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <>
      <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className= {`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <FontAwesomeIcon icon={faHouse} className='iconss' style={{color:'red'}}/><p>Home</p>
            </div>
            <div className= {`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}> 
                <FontAwesomeIcon icon={faGamepad} className='iconss' style={{color:'red'}}/><p>Gaming</p>
            </div>
            <div className= {`side-link ${category===2 ?"active":""}`} onClick={()=>setCategory(2)}>
                <FontAwesomeIcon icon={faCar} className='iconss' style={{color:'red'}}/><p>Automobiles</p>
            </div>
            <div className= {`side-link ${category===17 ?"active":""}`} onClick={()=>setCategory(17)}>
                <FontAwesomeIcon icon={faBasketball} className='iconss' style={{color:'red'}}/><p>Sports</p>
            </div>
            <div className= {`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <FontAwesomeIcon icon={faVideo} className='iconss' style={{color:'red'}}/><p>Entertainment</p>
            </div>
            <div className= {`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <FontAwesomeIcon icon={faMicrochip} className='iconss' style={{color:'red'}}/><p>Technology</p>
            </div>
            <div className= {`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <FontAwesomeIcon icon={faMusic} className='iconss' style={{color:'red'}}/><p>Music</p>
            </div>
            <div className= {`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <FontAwesomeIcon icon={faBlog} className='iconss' style={{color:'red'}}/><p>Blogs</p>
            </div>
            <div className= {`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <FontAwesomeIcon icon={faNewspaper} className='iconss' style={{color:'red'}}/><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribe-list">
            <h3>Subscribe</h3>
            <div className="side-link">
                <img src={PewDiePie} alt="logo" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src={MrBeast} alt="logo" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={justien} alt="logo" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={Minutes} alt="logo" /><p>5-Minutes Crafts</p>
            </div>
            <div className="side-link">
                <img src={NasDaily} alt="logo" /><p>Nas Daily</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
