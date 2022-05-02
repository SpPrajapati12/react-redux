import React from "react";


const Home = (props) => {
  console.warn("home", props)
  return (
    <div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
        <img src="https://clipart.info/images/ccovers/1503496387Apple-IPhone-7-128GB-Jet-Black-Mobile-Png.png"/>
        </div>
        <div className="text-wrapper item">
          <span>I phone</span>
          <span>I
          Price : $999.00
          </span>
         </div>
        <div className="btn-wrapper item">
          <button onClick={() => props.addToCartHandler({price : 1000,name : 'iphone 11' })}>Add To Cart</button>
          <button className="remove-class-btn" onClick={() => props.removeToCartHandler()}>Remove To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
