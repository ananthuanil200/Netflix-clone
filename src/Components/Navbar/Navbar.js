import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netf;ix-logo" />
      <div className='nav-detail'>
        <h5 className='nav-names'>Home</h5>
        <h5 className='nav-names'>TV Shows</h5>
        <h5 className='nav-names'>Movies</h5>
        <h5 className='nav-names'>My List</h5>
      </div>
      <img className='search' src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png" alt="search" />
      <img className='avatar' src="https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQHaHa?pid=ImgDet&rs=1" alt="avatar" />
    </div>
  )
}

export default Navbar
