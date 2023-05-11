import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'><Link to='/'>E-commerce</Link></h1>
        <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__item header__item__first'><Link to='/login'>Login</Link></li>
            <li className='header__item'><Link to='/register'>Register</Link></li>
            <li className='header__item'><Link to='/purchases'>Purchases</Link></li>
            <li className='header__item'><Link to='/cart'>Cart</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header