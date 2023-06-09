import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import './styles/home.css'
import FilterCategory from '../components/home/FilterCategory'
import FilterByPrice from '../components/home/FilterByPrice'

const Home = () => {

    const [inputValue, setInputValue] = useState('')
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const { productsGlobal } = useSelector(state => state)
    
    const input = useRef()

    const handleChangeInput = () => {
        setInputValue(input.current.value)
    }

    const productsFilter =  productsGlobal
        ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        .filter(prod => {
            const from = +fromTo.from
            const to = +fromTo.to
        
            const price = +prod.price
            
            if(from && to){
                return price >= from && price <= to
            }
            if(from && !to){
                return price >= from
            }
            if(!from && to){
                return price <= to
            }
            if(!from && !to){
                return true
            }
        })

        console.log(productsFilter)
    return (
        <div className='home'>
            <div className='home__filters'>
                <div className='home__filters__input'>
                    <input className='home__filters__input-input' ref={input} onChange={handleChangeInput} type="text" />
                    <button className='home__filters__input-btn'>Search</button>
                </div>
                
                <div className='home__filters__category'>
                    <FilterCategory />
                </div>

                <div className='home__filters__price'>
                    <FilterByPrice 
                        setFromTo={setFromTo}
                    />
                </div>
            </div>
            
            
            <div className='home__products'>
                {
                    productsFilter?.map(prod => (
                        <CardProduct 
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
           
        </div>
    )
}

export default Home