import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import './Product.css'
import product from '../static/image-product-1.jpg'
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
                        selected img 
                    </div>
                </div>
                <div className="RightDiv">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

