import React, { useEffect, useState } from 'react';
import logo from '../static/logo.svg';
import cart from '../static/icon-cart.svg';
import avatar from '../static/image-avatar.png';
import './NavBar.css';

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

    const alertMsg = () => {alert(`these links are not real links. Try adding some things to the cart, and cleaning out the cart.`)} 

    return (
        <div id="navBarWrap" className="sticky">
            <div id='navBarLinks'>
            <ul >
                <li onClick={alertMsg} id='navText'><img src={logo} alt='Logo'/></li>
                <li onClick={alertMsg}>Collections</li>
                <li onClick={alertMsg} id='navText'>Men</li>
                <li onClick={alertMsg} id='navText'>Women</li>
                <li onClick={alertMsg} id='navText'>About</li>
                <li onClick={alertMsg} id='navText'>Contact</li>
            </ul>
            </div>
            <div id='header-right'>
                <div>
                    <a href='#' onClick={cartBoxShow}>
                        <img src={cart} alt='Cart Logo'/>
                        <span className="ItemsInCart">{props.numInCart == 0 ? '' : props.numInCart}</span>
                    </a>
                </div>
                <div>
                    <a href='' onClick={alertMsg}><img src={avatar} id='avatar' alt='Avatar'/></a>
                </div>
            </div>
        </div>
    )
}

