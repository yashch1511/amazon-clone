import React from 'react';
import './Cart.css'

function Cart({ id, image, title, price, rating }) {
    return (
        <div className='checkoutProduct'>
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
        </div>
        </div>
    )
}

export default Cart