import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {

  const [hasClass, setHasClass] = useState(false)

  const handleMenu = () => {
    if(hasClass){
      setHasClass(false)
    } 
    if(!hasClass){
      setHasClass(true)
    }
    
  }
  console.log(hasClass)

  return (
    <header className='header'>
        <h1 className='header__title'><Link to='/'><img src="./photos/logo.jpg" alt="" /></Link></h1>
        <button onClick={handleMenu} className='header__btn'><i class="fa-solid fa-bars"></i></button>
        <nav className='header__nav'>
          <ul className={`${hasClass ? 'show' : ''}`}>
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