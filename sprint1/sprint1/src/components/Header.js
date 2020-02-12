import React from "react";
import logo from '../Assets/Logo/Logo-brainflix.png';
import searchIcon from '../Assets/Icons/PNG/Icon-search.png';
import userImage from '../Assets/Images/Mohan-muruge.jpg';



export default function Header() {
  return (
    <div className="header">
      <div className="head">
        <img className="head__logo" src={logo} alt="BrainFlix Logo" />
      </div>

      {/* searchbar section */}
      <div className="searchbar">
        <img className="searchbar__icon" src={searchIcon} alt="search icon" />
        <input type="text" className="searchbar__input" placeholder="Search" />
      </div>

      {/* upload btn and user image */}
      <div className="user">
        <button className="user__upload-btn">+ UPLOAD</button>
        <img className="user__image" src={userImage} alt="image" />
      </div>
    </div>
  );
}

// export default Header;
