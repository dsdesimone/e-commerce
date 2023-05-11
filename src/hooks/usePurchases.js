import { useDispatch } from "react-redux"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import axios from "axios"

const usePurchases = () => {
    
    const dispatch = useDispatch()
    const [purchases, setPurchases] = useState()

    const buyThisCart = () => {

        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.post(url, {}, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
        }

        const getAllProductsPurchased = () => {
            const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
            axios.get(url, getConfigToken())
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err))
        }

    return { purchases, buyThisCart, getAllProductsPurchased }
    
}

export default usePurchases