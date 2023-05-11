import React from 'react'
import { useForm } from 'react-hook-form'

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
    <article>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)} action="">
        <div>
          <label htmlFor="">From</label>
          <input {...register('from')} type="number" id='from' />
        </div>
        <div>
          <label htmlFor="">To</label>
          <input {...register('to')} type="number" id='to' />
        </div>
        <button>Filter price</button>
      </form>
    </article>
  )
}

export default FilterByPrice
