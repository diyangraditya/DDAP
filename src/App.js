import React from 'react';
import './App.css';
import LogoNTmpt from "./component/LogoNTmpt";
import TombolLokasiKiriAtas from "./component/TombolLokasiKiriAtas";
import HeroImage from './component/HeroImage';
import LoveProfile from './component/LoveProfile';
import SearchBar from './component/SearchBar';
import MenuItem from './component/MenuItem';


function App () {
  const menuData = [
    {id : 1, image: '/foto_foto/Ayam-Goreng-cak-iip.png', name: 'Ayam Goreng Cak iip'},
    {id : 2, image: '/foto_foto/Nasi-Katsu.png', name: 'Nasi Katsu'},
    {id : 3, image: '/foto_foto/Lontong-Sayur.png', name: 'Lontong Sayur'},
    {id : 4, image: '/foto_foto/Lalapan-Ayam-Crispy.png', name: 'Lalapan Ayam Crispy'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <HeroImage />
      </header>
        

      <body>
      <LoveProfile />
      <LogoNTmpt />
      <TombolLokasiKiriAtas />
      <SearchBar />
      <div className="menu-container"> 
          {menuData.map(menu => (
            <MenuItem key={menu.id} image={menu.image} name={menu.name} />
          ))}
      </div>
      </body>
    </div>
  );
}

export default App;
