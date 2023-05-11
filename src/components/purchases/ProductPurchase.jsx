import React from 'react'

const ProductPurchase = ({ prodPurchase }) => {

  return (
    <article>
        <img src={prodPurchase.product.images[0].url} alt="" />
        <h3>{prodPurchase.product.title}</h3>
        <h5>{prodPurchase.quantity}</h5>
        <span>{prodPurchase.product.price * prodPurchase.quantity}</span>
    </article>
  )
}

export default ProductPurchase