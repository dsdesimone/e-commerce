import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchase from '../components/purchases/ProductPurchase'
import './styles/purchases.css'


const Purchases = () => {

  const { purchases, getAllProductsPurchased } = usePurchases()

  useEffect(() => {
    getAllProductsPurchased()
  }, [])

  return (
    <div className='purchase__container'>
      <div className='purchase'>
        <h2 className='purchase__title'>Purchases</h2> 
        <div className='purchase__items'>
          {
            purchases?.map(prodPurchase => (
              <ProductPurchase 
                key={prodPurchase.id}
                prodPurchase={prodPurchase}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Purchases