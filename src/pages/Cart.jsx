import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/cart/ProductInCart'
import usePurchases from '../hooks/usePurchases'
import './styles/cart.css'


const Cart = () => {

    const dispatch = useDispatch()

    const { buyThisCart } = usePurchases()

    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])

    const { cartGlobal } = useSelector(state => state)

    const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price , 0)

    const handlePurchase = () => {
        buyThisCart()
    } 
 
    return (
        <div className='cart__container'>
            <div className='cart'>
                <h2 className='cart__title'>Cart</h2>
                <div className='cart__items'>
                    {
                        cartGlobal?.map(prodCart => (
                            <ProductInCart 
                                key={prodCart.id}
                                prodCart={prodCart}
                            />
                        ))
                    }
                </div>
                <footer className='cart__footer'>
                    <span className='cart__footer-word'>Total: </span>
                    <h3 className='cart__footer-total'>{totalPriceCart}</h3>
                    <button className='cart__footer-btn' onClick={handlePurchase}>Buy Now</button>
                </footer>
            </div>
        </div>
    )
}

export default Cart