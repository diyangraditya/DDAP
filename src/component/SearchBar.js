import React from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = () => {
    const clicked = () => {
        return alert("This feature is still under maintenance, we'll be coming up soonly");
    };

    return(
        <div className="Search-Bar">
            <input type="text" placeholder="Lagi mau makan apa?" />
                <button type="button" onClick={() => clicked()}>
                    <FaSearch />
                </button>
            
        </div>
    );
};

export default SearchBar;