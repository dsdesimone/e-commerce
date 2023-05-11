import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication.js'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import './styles/register.css'

const Register = () => {
    
    const { register, handleSubmit, reset } = useForm()

    const { createNewUser } = useAuthentication()

    const submit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)
    }

 

    return (
        <form className='register' onSubmit={handleSubmit(submit)}>
            <div className='register__container'>
                <h2 className='register__title'>Create new user</h2>
                <div className='register__item'>
                    <label className='register__item-label' htmlFor="firstName">First Name</label>
                    <input {...register('firstName')} className='register__item-input' type="text" id='firstName' />
                </div>
                <div className='register__item'>
                    <label className='register__item-label' htmlFor="lastName">Last Name</label>
                    <input {...register('lastName')} className='register__item-input' type="text" id='lastName' />
                </div>
                <div className='register__item'>
                    <label className='register__item-label' htmlFor="email">Email</label>
                    <input {...register('email')} className='register__item-input' type="email" id='email' />
                </div>
                <div className='register__item'>
                    <label className='register__item-label' htmlFor="password">Password</label>
                    <input {...register('password')} className='register__item-input' type="password" id='password' />
                </div>
                <div className='register__item'>
                    <label className='register__item-label' htmlFor="phone">Phone</label>
                    <input {...register('phone')} className='register__item-input' type="tel" id='phone' />
                </div>
                <button className='register__btn'>Register</button>
            </div>
        </form>
    )
}

export default Register