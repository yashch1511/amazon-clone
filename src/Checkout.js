import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Cart from "./Cart";
//import FlipMove from 'react-flip-move';

function Checkout() {
    const [{user,basket}] = useStateValue();
    
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="img"
        />

        <div>
          
          <h2>Hey {user?user.email:'Guest'}</h2>
         <h2>Your Cart</h2>

       
        {basket.map(item => (
            <Cart
            key={item.id}
            uniqueId={item.uniqueId}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
          </div>
          </div>

        <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;