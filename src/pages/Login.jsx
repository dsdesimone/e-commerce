import React from 'react'
import useAuthentication from '../hooks/useAuthentication.js'
import './styles/login.css'

const Login = () => {

    const { loginUser } = useAuthentication()

    const handleLogin = e => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      const data = { email, password }
      loginUser(data)
    }

    

    return (
      <form className='login' onSubmit={handleLogin}>
        <div className='login__container'>
          <h2 className='login__title'>Login</h2>
          <div className='login__item'>
            <label className='login__item-label' htmlFor="email">Email</label>
            <input className='login__item-input' type="email" id='email' />
          </div>
          <div className='login__item'>
            <label className='login__item-label' htmlFor="password">Password</label>
            <input className='login__item-input' type="password" id='password' />
          </div>
          <button className='login__btn'>Sign in</button>
        </div>
      </form>
    )
}

export default Login