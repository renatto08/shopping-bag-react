import { React, useState, useRef } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import products from './data/products.json';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [productDetail, setproductDetail] = useState({});
  const cartRef = useRef();
  const addToBag = (name, price, id) => {
    const value = items.find((item) => item.id === id)

    if (value) {
      const newQuantity = items.map((item) => {
        if (item.id === id) item.quantity++;
        return item;
      });
      setItems(newQuantity);
    } else {
      setItems([...items, { id, name, price, quantity: 1 }]);
    }

  }

  const removeItemFromBag = (id) => {
    const newListItems = items.filter((item) => {
      return item.id !== id;
    })
    console.log(newListItems);
    setItems(newListItems);
  }
  const manageQuantity = (id, type) => {
    const newItemList = items.map((item) => {
      if (item.id === id) {
        if (type === 'decrease' && item.quantity === 1) return item;
        type === 'increase' ? item.quantity++ : item.quantity--;
      }
      return item;
    })
    setItems(newItemList);
  }

  const viewDetail = (id) => {
    console.log(id);
    setproductDetail(products.find((item) => item.id === id));
  }
  const openCart = () => {
    cartRef.current.style.display = 'block';
  }

  return (
    <div className="App" >
      <Header openCart={openCart} />
      <section className='section-products'>
        {products.map((value) =>
          <Product key={value.id}
            name={value.name}
            description={value.description}
            price={value.price}
            id={value.id}
            image={value.image}
            manageToBag={addToBag}
            viewDetail={viewDetail}
          />
        )}
      </section>
      <Cart cartItems={items}
        removeItemFromBag={removeItemFromBag}
        manageQuantity={manageQuantity}
        cartRef={cartRef}
      />
    </div >
  );

}

export default App;
