import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchase from '../components/purchases/ProductPurchase'

const Purchases = () => {

  const { purchases, getAllProductsPurchased } = usePurchases()

  useEffect(() => {
    getAllProductsPurchased()
  }, [])

  return (
    <div>
      <h2>Purchases</h2>
      {
        purchases?.map(prodPurchase => (
          <ProductPurchase 
            key={prodPurchase.id}
            prodPurchase={prodPurchase}
          />
        ))
      }
    </div>
  )
}

export default Purchases