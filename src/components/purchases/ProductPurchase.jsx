import React from 'react'
import './styles/productPurchase.css'

const ProductPurchase = ({ prodPurchase }) => {

  return (
    <article className='product__purchase'>
        <header className='product__purchase__header'>
          <img className='product__purchase__header-img' src={prodPurchase.product.images[2].url} alt="" />
        </header>
        <h3 className='product__purchase__title'>{prodPurchase.product.title}</h3>
        <footer className='product__purchase__footer'>
          <div className='product__purchase__footer__div'>
            {/* <span className='product__purchase__footer__div-word'>Quantity</span> */}
            <h5 className='product__purchase__footer__div-number'>{prodPurchase.quantity}</h5>
          </div>
          <div className='product__purchase__footer__div'>
            <span className='product__purchase__footer__div-word'>Price</span>
            <span className='product__purchase__footer__div-number'>{prodPurchase.product.price * prodPurchase.quantity}</span>
          </div>
        </footer>
        
    </article>
  )
}

export default ProductPurchase