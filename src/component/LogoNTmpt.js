import React from 'react';  
import './LogoNTmpt.css';

const LogoNTmpt = () => {
    return(
            <img src={process.env.PUBLIC_URL + '/foto_foto/Logo.png'} className='logo-met-mam' alt="Logo" height={130}></img>
    );
}

export default LogoNTmpt;