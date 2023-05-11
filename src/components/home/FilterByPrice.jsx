import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterByPrice.css'

const FilterByPrice = ({ setFromTo }) => {

  const { reset, handleSubmit, register } = useForm()

  const submit = data => {
    setFromTo(data)
    reset({
      from: '',
      to: '' 
    })
  }


  return (
    <article className='filter__price'>
      <h3 className='filter__price__title'>Price</h3>
      <form className='filter__price__form' onSubmit={handleSubmit(submit)} action="">
        <div className='filter__price__form__item'>
          <label className='filter__price__form__item-label' htmlFor="">From</label>
          <input className='filter__price__form__item-input' {...register('from')} type="number" id='from' />
        </div>
        <div className='filter__price__form__item'>
          <label className='filter__price__form__item-label' htmlFor="">To</label>
          <input className='filter__price__form__item-input' {...register('to')} type="number" id='to' />
        </div>
        <button className='filter__price__btn'>Filter price</button>
      </form>
    </article>
  )
}

export default FilterByPrice
