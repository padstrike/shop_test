import React from 'react';
import {useState,useEffect} from 'react';

import Shop from './components/shop'
import Item from './components/item'



import ShopContext from './context/shopContext'

function App() {
  const [shops,setShop] = useState([])
  useEffect(() => {
    
    fetch('/rest-api/')
  .then((response) => response.json())			
  .then(data => {
    setShop(data)
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })},[])

  return (
    <>
      <ShopContext.Provider value={{shops}}>
        <Shop/>
        <Item/>
      </ShopContext.Provider>
              
    </>
  );
}

export default App;
