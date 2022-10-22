import {React} from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";

function Cart({ cartItems, removeItemFromBag, manageQuantity, cartRef }) {
  const closeCart = ()=>{
    cartRef.current.style.display = 'none';
  }

  return (
    <nav ref={cartRef} className="shoppingBag">
      <h2>Items en tu carrito</h2>
      <div className="shoppingBag-close"  onClick={closeCart} > X</div>
      <div className="shoppingBag-items">
      {
        cartItems.length > 0 ?
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            removeItemFromBag={removeItemFromBag}
            manageQuantity={manageQuantity} />

        ))
        :
        <span>No items in your bag</span>
      }
      </div>
      <div className="shoppingBag-footer">
          <ul>
              <li>Free express shipping and returns</li>
              <li>Duties and taxes are guaranteed</li>
          </ul>
          <div className="shoppingBag-total">
              <label htmlFor="total">Total: </label>
              <label htmlFor="amount">S/ </label>
          </div>
          <button className="button-continue-next-step" id="checkout-button">Checkout</button>

      </div>




    </nav>
  )
}

export default Cart;