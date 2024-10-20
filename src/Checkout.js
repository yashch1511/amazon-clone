import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Cart from "./Cart";

function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="img"
        />

        <div>
         <h2>Your Cart</h2>
        
        {basket.map(item => (
            <Cart
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