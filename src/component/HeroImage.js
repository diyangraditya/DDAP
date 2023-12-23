import React from "react";
import './HeroImage.css';

function HeroImage () {
    return(
        
            <img src= {process.env.PUBLIC_URL + './foto_foto/header.png'} className="heroI" alt=""></img>
        
    )
}
export default HeroImage;