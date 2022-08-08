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
                <li><a href='' onClick={alertMsg}><img src={logo} alt='Logo'/></a></li>
                <li><a href='' id='navText' onClick={alertMsg}>Collections</a></li>
                <li><a href='' id='navText' onClick={alertMsg}>Men</a></li>
                <li><a href='' id='navText' onClick={alertMsg}>Women</a></li>
                <li><a href='' id='navText' onClick={alertMsg}>About</a></li>
                <li><a href='' id='navText' onClick={alertMsg}>Contact</a></li>
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

