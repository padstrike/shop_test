import React from 'react';
import '../css/item.css'
import {useState,useEffect} from 'react';

const Item = () => {
    const [items,setItem] = useState([])
  useEffect(() => {
    
    fetch('/item/')
  .then((response) => response.json())			
  .then(data => {
    setItem(data)
    
  })
  .catch((error) => {
    console.log(error)
  })},[])
    return (
        <>
        
        
        
        {items.map((item,index)=>( 
                 <div className="card" key={index}>
                    <div class="card__side card__side--front">
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--2">Product</span>
                        </h4>
                                        <div class="card__details">
                                            <ul>
                                                <li>{item.itemname}</li>
                                                <li>{item.desciption}</li>
                                                <li>{item.price} BATH</li>
                                                <li>2 {item.unit}</li>   
                                            </ul>
                                        </div>
                     </div>
                    </div>
           ))
        }
    </>
    );
}

export default Item;
