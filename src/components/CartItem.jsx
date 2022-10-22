import React from "react";
import '../styles/CartItem.css'

function CartItem({ id, name, price, quantity, removeItemFromBag, manageQuantity }) {
    return (
        <div className="cart-item">
            <div className="cart-item-name">{name}</div>
            <div className="cart-item-price">{price}</div>
            <div className="cart-item-quantity">{quantity}</div>
            <button className="quantity-button" onClick={() => manageQuantity(id, 'decrease')}>-</button>
            <button className="quantity-button" onClick={() => manageQuantity(id,'increase')}>+</button>
            <div className="cart-item-total">{quantity * price}</div>
            <button className="remove-item" onClick={() => removeItemFromBag(id)}> Quitar</button>
        </div>
    )
}

export default CartItem;