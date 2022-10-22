import { useRef } from 'react'
import '../styles/Header.css'
export default function Header(props){
  const cartIconRef = useRef();


  return (
  <>
  <section className="promotion">Shipping 50% off worldwide</section>
  <header className="header">
      <div className="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
      <div className="logo"><a href="#/">My Online Store</a></div>
      <nav className="options">
          <div className="search">
              <svg className="right-option-search" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <circle className="right-option-search" cx="10" cy="10" r="7"></circle><path d="m21 21l-6-6"></path></g>
              </svg>
          </div>
          <div ref={cartIconRef} className="shoppingBagIcon" onClick={props.openCart}>
              <svg className="right-option-cart" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m239 206.2l-14.3-128A15.9 15.9 0 0 0 208.8 64h-33.5a48 48 0 0 0-94.6 0H47.2a15.9 15.9 0 0 0-15.9 14.2L17 206.2a16.2 16.2 0 0 0 4 12.5a15.9 15.9 0 0 0 11.9 5.3h190.2a15.9 15.9 0 0 0 11.9-5.3a16.2 16.2 0 0 0 4-12.5ZM128 40a32.1 32.1 0 0 1 31 24H97a32.1 32.1 0 0 1 31-24ZM32.9 208L47.2 80H80v24a8 8 0 0 0 16 0V80h64v24a8 8 0 0 0 16 0V80h32.8l14.3 128Z"></path></svg>
          </div>
      </nav>
      {/* ${SearchProductForm()} */}

  </header>
  </>
  )
}