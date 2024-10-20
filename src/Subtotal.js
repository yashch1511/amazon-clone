import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Subtotal() {
 
    const [{ basket }] = useStateValue();
    console.log(basket);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
          let total = basket.reduce((sum, item) => sum + item.price, 0);
          setTotalPrice(total); 
        };
    
        calculateTotal(); 
      }, [basket]); 


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
     <Link to='/Payment'>
      <button >Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;