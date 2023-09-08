import React from 'react'

const CartCard = ({image,ind,price,quantity,name}) => {
 
    let totalCost = (+price )* (+quantity)

  return (
    <div className='cartDiv'>
        <h3>{ind}</h3>
        <div>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <h3>${price.toLocaleString()}</h3>
        <h4>{quantity} QTY </h4>
        <h3>${totalCost.toLocaleString()}</h3>

    </div>
  )
}

export default CartCard