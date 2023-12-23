import React, { useState } from "react";
import './LoveProfile.css';
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

const LoveProfile = () => {
    const [isFavoriteActive, setFavoriteActive] = useState(false);
    const [isProfileActive, setProfileActive] = useState(false);

    const toggleFavorite = () => {
        setFavoriteActive(!isFavoriteActive);
    };

    const toggleProfile = () => {
        setProfileActive(!isProfileActive);
    };
    return(
        <div className="navbar">
            <div className={`favorite ${isFavoriteActive ? 'active' : ''}`} onClick={toggleFavorite}>
                {isFavoriteActive ? <FaHeart size={50} color="red" /> : <FaRegHeart size={50} color="#6A3C13" />}
            </div>
            <div className={`profile ${isProfileActive ? 'active' : ''}`} onClick={toggleProfile}>
                <CgProfile size={50} color="#6A3C13" />
            </div>
        </div>  
);
    
};

export default LoveProfile;