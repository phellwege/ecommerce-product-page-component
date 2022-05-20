import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import './Product.css'
import product from '../static/image-product-1.jpg'
import thumb1 from '../static/image-product-1-thumbnail.jpg';
import thumb2 from '../static/image-product-2-thumbnail.jpg';
import thumb3 from '../static/image-product-3-thumbnail.jpg';
import thumb4 from '../static/image-product-4-thumbnail.jpg';
import LeftArrow from '../static/icon-previous.svg';
import RightArrow from '../static/icon-next.svg';
import minus from '../static/icon-minus.svg';
import plus from '../static/icon-plus.svg';
import cart from '../static/icon-cart.svg'

export default (props) => {
        
    return (
        <>
            <Header/>
            <div className='ProductWrap'>
                <div className="LeftDiv">
                    <div id='BigImg'>
                        <img src={product}/>
                    </div>
                    <div id='ImgSelector'>
                        <img src={thumb1}/>
                        <img src={thumb2}/>
                        <img src={thumb3}/>
                        <img src={thumb4}/>
                    </div>
                </div>
                <div className="RightDiv">
                    <div id='text-desc'>
                        <h5>Sneaker Company</h5>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </p>
                        
                        <br/>
                        <span id='newPrice'>$125.00</span> 
                        <span id='percent-off'>50%</span>
                        <br/>
                        <span id='previousPrice'>$250.00</span>
                        <br/>
                    </div>
                    <div id='add-to-cart'>
                        <div id='counter'>
                            <img src={minus}/>
                            0
                            <img src={plus}/>
                        </div>
                        <button>
                            <img src={cart}/>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

