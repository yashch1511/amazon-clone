import React from 'react'
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react';


function Header() {
    const [isBouncing, setIsBouncing] = useState(false);
    const [{ basket }] = useStateValue();

    useEffect(() => {
        if (basket?.length > 0) {
          triggerBounce();
        }
      }, [basket?.length]); 

      const triggerBounce = () => {
        setIsBouncing(true); 
    
        const timer = setTimeout(() => {
          setIsBouncing(false); 
        }, 600);
    
        return () => clearTimeout(timer); 
      };


    
      
  return (
    <div className='Header'>
        <Link to="/">
        <img alt='amazon-logo'
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
         <div className="header__search">
        <input className="header__searchInput" type="text" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className='header__nav'>
        <div className='header__option'>
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>Sign In</span>

        </div>

        <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>Orders</span>

        </div>

        <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>

        </div>
        <Link to="/Checkout">
        <div className="header__optionBasket">
        <i  onClick={triggerBounce}
        style={{
          
          transition: 'transform 0.6s',
          transform: isBouncing ? 'translateY(-10px)' : 'translateY(0)',
        }} class="fa-solid fa-cart-shopping"></i>
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
          </Link>


      </div>
        
    </div>
  )
}

export default Header