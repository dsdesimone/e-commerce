import React, { useState } from 'react'
import './styles/ProductInfo.css'
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInfo = ({ product }) => {
  
  const {addProductToCart} = useCrudCart()

  const [quantity, setQuantity] = useState(1)
  
  const handlePlus = () => setQuantity(quantity + 1)

  const handleMinus = () => {
    if (quantity -1 >= 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    const data = {
      quantity: quantity,
      productId: product.id
    }
    addProductToCart(data)
  }

  // const achetres = useRef()

  // achetres?.current?.addEventListener('click', ()=> {
  //   console.log('Soy un addEventListener')
  // })

  return (
    <section className='prodinfo'>
      <h3 className='prodinfo__subtitle'>{product?.brand}</h3>
      <h2 className='prodinfo__title'>{product?.title}</h2>
      <p className='prodinfo__description'>{product?.description}</p>
      <footer className='prodinfo__footer'>
        <div className='prodinfo__footer__price'>
          <span className='prodinfo__footer__price-word'>Price</span>
          <span className='prodinfo__footer__price-price'>{product?.price}</span>
        </div>
        <div className='prodinfo__footer__quantity'>
          <span className='prodinfo__footer__quantity-word'>Quantity</span>
          <div className='prodinfo__footer__quantity-box'>
            <button className='prodinfo__footer__quantity-box-minus' onClick={handleMinus}>-</button>
            <div className='prodinfo__footer__quantity-box-quantity'>{quantity}</div>
            <button className='prodinfo__footer__quantity-box-plus' onClick={handlePlus}>+</button>
          </div>
        </div>
        <button onClick={handleAddToCart} className='prodinfo__footer__btn'>Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
      </footer>
    </section>
  )
}

export default ProductIdInfo