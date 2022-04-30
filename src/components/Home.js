import React from "react";

const Home = () => {
  return (
    <div>
      <div className='add-to-cart'>
               <img src='https://w7.pngwing.com/pngs/15/271/png-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail.png'/>
           </div>
      <h3>Home component</h3>
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
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
