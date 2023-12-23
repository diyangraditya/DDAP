import React from "react";
import './TombolLokasiKiriAtas.css';

const TombolLokasiKiriAtas = () => {
    return(
            <button className="logo-lokasi">
                <img src={process.env.PUBLIC_URL + './foto_foto/logo-lokasi.png'} className="logonya" alt=""></img>
                FILKOM UB
            </button>
    );
}

export default TombolLokasiKiriAtas;