import React, { useEffect, useState } from 'react';
import './LightBox.css';
import product from '../static/image-product-1.jpg'
import thumb1 from '../static/image-product-1-thumbnail.jpg';
import thumb2 from '../static/image-product-2-thumbnail.jpg';
import thumb3 from '../static/image-product-3-thumbnail.jpg';
import thumb4 from '../static/image-product-4-thumbnail.jpg';
export default (props) => {
        
    return (
        <div>
            <div id='BigImg'>
                <img src={product}/>
            </div>
            <div id='ImgSelector'>
                <img src={thumb1} id='img1'/>
                <img src={thumb2} id='img2'/>
                <img src={thumb3} id='img3'/>
                <img src={thumb4} id='img4'/>
            </div>
        </div>
    )
}

