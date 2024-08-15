import React from "react";
// import './Navbar.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <div className="navbar   md:h-14 flex flex-row text-white justify-between">
      <div className="flex flex-row w-1/2 pt-">
        <div>
          <img
            className="logo h-10 w-52 md:w-40 p-1 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netf;ix-logo"
          />
        </div>
        <div className="nav-detail flex flex-row justify-evenly w-full">
          <h5 className="nav-names hidden md:block">Home</h5>
          <h5 className="nav-names hidden md:block">TV Shows</h5>
          <h5 className="nav-names hidden md:block">Movies</h5>
          <h5 className="nav-names hidden md:block">My List</h5>
        </div>
      </div>
      <div className="flex flex-row items-center">
      <img className='search h-5 w-5' src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png" alt="search" />
      <div className="text-white p-1 mr-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
