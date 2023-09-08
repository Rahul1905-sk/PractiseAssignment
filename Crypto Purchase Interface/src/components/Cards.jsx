import React, { useState } from "react";

const Cards = ({id, name, image, price, handleCart }) => {
 
    const [quantity, setQuantity] = useState("");

    const [flag, setFlag] = useState(false)

    const handleBuy = () => {
      if(quantity==0) {
        alert("Please enter a quantity.")

      } else {
        setFlag(false)
        handleCart(id,quantity)
        setQuantity('')
      }
    }

  return (
    <div className="cardMain">
      <div className="card">
        <div className="imgDiv">
          <img style={{ alignSelf: "center" }} src={image} alt={name} />
        </div>
        <h2>Name - {name}</h2>
        <h2>Price - ${price.toLocaleString()}</h2>
       
      </div>
      <div className="btmSection">
            <input hidden={!flag} type="number" placeholder="Enter Qty" value={quantity} onChange={e=>setQuantity(e.target.value)} />
          <div className="btnDiv">
            <button onClick={()=>setFlag(true)}>Quantity</button>
          <button onClick={handleBuy}>Buy Now</button>
          </div>

        </div>
    </div>
  );
};

export default Cards;
