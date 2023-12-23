import React from "react";
import './MenuItem.css';

const MenuItem = ({image, name}) => {
    return(
        <div className="menu-item">
            <img src="{image}" alt="" className="menu-image" />
            <p className="menu-name">{name}</p>
        </div>
    );
}

export default MenuItem;