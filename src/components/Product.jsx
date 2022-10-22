import React from "react";
import '../styles/Product.css'

function Product(props){

    return (
        <div className='section-products-item' data-set={ props.id }>
          <a href="/#" onClick={()=>{ 
            props.viewDetail(props.id)}}>
          <img className="section-products-item-img" src={props.image} alt="" width={'100%'} height={'260px'}  />
          <div className="section-products-item-name">
              {props.name}
          </div>

          </a>
          <div className="section-products-item-price">
            {props.price}
          </div>
          <button className='section-products-item-button-add' onClick={ ()=>props.manageToBag(props.name, props.price, props.id, 1) }>
              Add to Bag
          </button>
        </div>

    )
}

export default Product;