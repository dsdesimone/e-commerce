import React from 'react'
import './styles/CardProduct.css'
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../hooks/useCrudCart'

const CardProduct = ({ prod }) => {

    const { addProductToCart } = useCrudCart()

    const navigate = useNavigate()

    const handleSelectProduct = () => {
        navigate(`/product/${prod.id}`)
    }
    const handleBtnClick = e => {
        e.stopPropagation()
        const data = {
            quantity: 1,
            productId: prod.id
        }
        addProductToCart(data)
    } 

    return (
        <article onClick={handleSelectProduct} className='product'>
            <header className='product__header'>
                <img className='product__header__img product__header__img-1' src={prod.images[0].url} alt="" />
                <img className='product__header__img product__header__img-2' src={prod.images[1].url} alt="" />
            </header>
            <section className='product__section'>
                <h4 className='product__section__subtitle'>{prod.brand}</h4>
                <h3 className='product__section__title'>{prod.title}</h3>
            </section>
            <div className='product__price__btn'>
                <div className='product__price__container'>
                    <span className='product__price__container-word'>Price</span>
                    <span className='product__price__container-price'>{prod.price}</span>
                </div>
                <button onClick={handleBtnClick} className='product__btn'>
                    <i className="product__btn-icon fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </article>
    )
}

export default CardProduct