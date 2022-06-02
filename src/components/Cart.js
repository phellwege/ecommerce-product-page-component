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
const {active}=props;

    return (
        <div className="cartBoxWrap">
            <div className="cartBoxBox">
                <img src={close} id='closeIcon' onClick={cartBoxShow} alt='close icon'/>
            </div>
        </div>
    )
}

