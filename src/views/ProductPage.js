import React, { useState } from 'react';
import Header from '../components/Header';
import './Product.css'
import product from '../static/image-product-1.jpg'
import thumb1 from '../static/image-product-1-thumbnail.jpg';
import thumb2 from '../static/image-product-2-thumbnail.jpg';
import thumb3 from '../static/image-product-3-thumbnail.jpg';
import thumb4 from '../static/image-product-4-thumbnail.jpg';
import minus from '../static/icon-minus.svg';
import plus from '../static/icon-plus.svg';
import cart from '../static/icon-cart.svg';
import LightBox from '../components/LightBox';
import Cart from '../components/Cart';

export default (props) => {
    const {active}=props;
    let [numInCart, setNumInCart] = useState(0);
    const [count, setCount] = useState(0);
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
    function setMinusCount() {
        if(count>0){
            setCount(count - 1)
        return count
    }};
    function addToCart() {
        if(count>0) {
            numInCart += count;
            setCount(0);
        }
    setNumInCart(numInCart)
    };
    function removeFromCart() {
        if(numInCart>0) {
            numInCart = 0;
        }
        setNumInCart(numInCart)
    };
    return (
        <>
            <Header count={count} numInCart={numInCart} setNumInCart={setNumInCart} removeFromCart={removeFromCart}/>
            <LightBox/>
            <Cart count={count} numInCart={numInCart} setNumInCart={setNumInCart} removeFromCart={removeFromCart}/>
            <div className='ProductWrap'>
                <div className="LeftDiv">
                    <div id='BigImg'>
                        <img src={product} onClick={lightBoxShow} alt='product img'/>
                    </div>
                    <div id='ImgSelector'>
                        <img src={thumb1} id='img1' className={"links"+(active===0?" active":"")} alt='thumbnail' />
                        <img src={thumb2} id='img2' className={"links"+(active===1?" active":"")} alt='thumbnail' />
                        <img src={thumb3} id='img3' className={"links"+(active===2?" active":"")} alt='thumbnail' />
                        <img src={thumb4} id='img4' className={"links"+(active===3?" active":"")} alt='thumbnail' />
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
                    <br/>
                    <div id='add-to-cart'>
                        <div className='counter'>
                            <img src={minus} id='counterMinus' onClick={() => setMinusCount()} alt=''/>
                            {count}
                            <img src={plus} id='counterPlus' onClick={() => setCount((count + 1))} alt=''/>
                        </div>
                        <button onClick={() => addToCart()}>
                            <img src={cart} alt='cart logo'/>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

