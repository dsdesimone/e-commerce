import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import './styles/filterByCategory.css'

const FilterCategory = () => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`

    const [ categories, getAllCategories ] = useFetch(url)

    const dispatch = useDispatch()

    useEffect(() => {
        getAllCategories()
    }, [])

    const handleClickCategories = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
    }

    const handleClickAllProducts = () => {
        dispatch(getAllProductsThunk())
    }

    return (
        <div className='filter__category'>
            <h3 className='filter__category__title'>Category</h3>
            <ul className='filter__category__list'>
                <li className='filter__category__item' onClick={handleClickAllProducts}>All products</li>
                {
                    categories?.map(category => (
                        <li className='filter__category__item' onClick={() => handleClickCategories(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterCategory