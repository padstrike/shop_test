import React from 'react';
import {useContext} from 'react'
import '../css/shop.css'


import ShopContext from '../context/shopContext'

const Shop = () => {

    const {shops} = useContext(ShopContext)
    
    return (
        <section className="section-features">
               {shops.map((shop,index)=>( 
                <div className="row" key={index}>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">{shop.shopname}</h3>
                            <p className="feature-box__text">
                                {shop.desciption}
                            </p>
                        </div>
                    </div> 
                </div>
                ))
              }
            </section>
    );
}

export default Shop;
