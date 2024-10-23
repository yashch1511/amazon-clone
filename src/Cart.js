import React from 'react';
import './Cart.css'
import { useStateValue } from "./StateProvider";
import { useState } from 'react';

function Cart({ id, image, title, price, rating,hideButton,uniqueId }) {
    const [{ basket }, dispatch] = useStateValue();
    const [removed, setRemoved] = useState(false);




    const removeFromBasket = () => {
        setRemoved(true);
        // remove the item from the basket
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            });
        }, 500);
    }
    return (
        <div className={`checkoutProduct  ${removed ? 'removed' : ''}`} key={uniqueId}>
            

               <img className='checkoutProduct__image' src={image} alt="img"/>

               <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><i class="fa-solid fa-star"></i></p>

                    ))}
                
                   </div>
                    {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                     )}
                    
                    </div> 
                    </div>
            
    )
}

export default Cart