import React, { useEffect, useState } from 'react';
import './LightBox.css';
import product from '../static/image-product-1.jpg'
import thumb1 from '../static/image-product-1-thumbnail.jpg';
import thumb2 from '../static/image-product-2-thumbnail.jpg';
import thumb3 from '../static/image-product-3-thumbnail.jpg';
import thumb4 from '../static/image-product-4-thumbnail.jpg';
import LeftArrow from '../static/icon-previous.svg';
import RightArrow from '../static/icon-next.svg';
import close from '../static/icon-close.svg';
export default (props) => {
        
    const lightBoxShow = () => {
        const x = document.getElementsByClassName('lightBoxWrap')[0];
        const y = document.getElementsByClassName('cartBoxWrap')[0];
        if(x.style.display == 'block') {
            x.style.display = 'none';
            y.style.display = 'none';
        }
        else {
            x.style.display = 'block';
            y.style.display = 'none';
        }
}
const {active}=props;

    return (
        <div className="lightBoxWrap">
            <div className="lightBoxBox">
                <img src={close} id='closeIcon' onClick={lightBoxShow} alt='close icon'/>
                <div id='BigImg'>
                    <img src={LeftArrow} className='arrow'/>
                    <img src={product}/>
                    <img src={RightArrow} className='arrow'/>
                </div>
                <div id='ImgSelector'>
                    <img src={thumb1} id='img1' className={"links"+(active===0?" active":"")} alt='thumbnail'/>
                    <img src={thumb2} id='img2' className={"links"+(active===1?" active":"")} alt='thumbnail'/>
                    <img src={thumb3} id='img3' className={"links"+(active===2?" active":"")} alt='thumbnail'/>
                    <img src={thumb4} id='img4' className={"links"+(active===3?" active":"")} alt='thumbnail'/>
                </div>
            </div>
        </div>
    )
}

