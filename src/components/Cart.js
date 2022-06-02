import React, { useEffect, useState } from 'react';
import './Cart.css';
import thumb1 from '../static/image-product-1-thumbnail.jpg';
import close from '../static/icon-close.svg';
export default (props) => {
        
    const cartBoxShow = () => {
        const y = document.getElementsByClassName('cartBoxWrap')[0];
        if(y.style.display == 'block') {
            y.style.display = 'none';
        }
        else {
            y.style.display = 'block';
        }
}


    return (
        <div className="cartBoxWrap">
            <div className="cartBoxBox">
                {props.numInCart == 0 ? '' : <img src={thumb1} alt='product in cart' className='cartThumb'/>} 
                <div>
                    {props.numInCart == 0 ? '' : 'Fall Limited Edition Sneakers'} 
                    <br/>
                    {props.numInCart == 0 ? '' : props.numInCart} 
                    {props.numInCart == 0 ? '' : ' X '} 
                    {props.numInCart == 0 ? '' : ' 125 '} 
                    <span id='boldMe'>
                        {props.numInCart == 0 ? '' : props.numInCart * 125.00}
                    </span>
                </div>
            </div>
            <button className="checkout" onClick={cartBoxShow}>
                Checkout
            </button>
        </div>
    )
}

