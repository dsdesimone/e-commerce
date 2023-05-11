import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './styles/productInCart.css'

const ProductCart = ({ prodCart }) => {

  const { deleteProductFromCart } = useCrudCart()
 
  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id)
  }
 
  console.log(prodCart)
  return (
    <article className='cart__product'>
      <header className='cart__product__header'>
        <img className='cart__product__header-img' src={prodCart.product.images[0].url} alt="" />
      </header>
      <section className='cart__product__section'>
        <h3 className='cart__product__section-title'>{prodCart.product.title}</h3>
      </section>
      <button className='cart__product__btn' onClick={handleDeleteCart}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <footer className='cart__product__footer'>
        <div className='cart__product__footer-div'>
          <span className='cart__product__footer-word'>Quantity: </span>
          <span className='cart__product__footer-number'>{prodCart.quantity}</span>
        </div>
        <div className='cart__product__footer-div'>
          <span className='cart__product__footer-word'>Subtotal:</span>
          <span className='cart__product__footer-price'>{prodCart.product.price * prodCart.quantity}</span>
        </div>
      </footer>
    </article>
  )
}

export default ProductCart