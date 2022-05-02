import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className='add-to-cart'>
        <span className="cart-count">{props.data.length}</span>
               <img src='https://w7.pngwing.com/pngs/15/271/png-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail.png'/>
           </div>
    </div>
  );
};

export default Header;
