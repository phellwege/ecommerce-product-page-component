import React, { useEffect, useState } from 'react';
import logo from '../static/logo.svg';
import cart from '../static/icon-cart.svg';
import avatar from '../static/image-avatar.png'
import './NavBar.css';

export default (props) => {
        
    return (
        <div id="navBarWrap" className="sticky">
            <div id='navBarLinks'>
            <ul >
                <li><a href='/'><img src={logo} alt='Logo'/></a></li>
                <li><a href='/' id='navText'> Collections</a></li>
                <li><a href='/' id='navText'> Men</a></li>
                <li><a href='/' id='navText'> Women</a></li>
                <li><a href='/' id='navText'> About</a></li>
                <li><a href='/' id='navText'> Contact</a></li>
            </ul>
            </div>
            <div id='header-right'>
                <div>
                    <a href='/'>
                        <img src={cart} alt='Cart Logo'/>
                        {props.numInCart}
                    </a>
                </div>
                <div>
                    <a href='/'><img src={avatar} id='avatar' alt='Avatar'/></a>
                </div>
            </div>
        </div>
    )
}

