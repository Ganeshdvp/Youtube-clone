import React, { useState } from 'react'
import './Navbar.css'
import watchLogo from '../../assets/watchLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCloudArrowUp, faMagnifyingGlass, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { API_KEY } from '../../data';


const Navbar = ({setSidebar, setSearchQuery}) => {

   const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    // Fetch suggestions from YouTube API
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(value)}&key=${API_KEY}&type=video`
    );
    const data = await res.json();
    setSuggestions(data.items || []);
    setShowSuggestions(true);
  };

  const handleSearch = (query) => {
    setShowSuggestions(false);
    setSearch(query);
    setSearchQuery(query); // Update search query in App
  };
  
  return (
    <>
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <FontAwesomeIcon icon={faBars} onClick={() => setSidebar(prev => !prev)} className='menu-icon'/>
            <Link to='/'><p><img className='logo' src={watchLogo} alt="logo" /></p>
            </Link>
            <span>Watch Time</span>
        </div>
        <div className='nav-middle flex-div' style={{ position: 'relative' }}>
            <div className='search-box flex-div'>
              <input
              type="text"
              placeholder='Search...'
              value={search}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(suggestions.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSearch(search);
              }}
            />
             <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' onClick={() => handleSearch(search)}/>
            </div>
             {showSuggestions && suggestions.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              right: 0,
              background: '#000000',
              zIndex: 100,
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              fontSize: '0.8rem'
            }}>
              {suggestions.map(item => (
                <div
                  key={item.id.videoId}
                  style={{ padding: '8px 12px', cursor: 'pointer', color: 'white' }}
                  onMouseDown={() => handleSearch(item.snippet.title)}
                  className='suggestion-item'
                >
                  {item.snippet.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='nav-right flex-div'>
            <FontAwesomeIcon icon={faCloudArrowUp} className='icons'/>
            <FontAwesomeIcon icon={faTableCells} className='icons'/>
            <FontAwesomeIcon icon={faBell} className='icons'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10PKiP_JgIwAEgEN0iQjXUcx0HfCFmuB-rRDZQkj-0GxtZgb7hZmX9Ks4HEAAgY0832w&usqp=CAU' alt="user-icon" className='user-icon'/>
        </div>
    </nav>
    </>
  )
}

export default Navbar

