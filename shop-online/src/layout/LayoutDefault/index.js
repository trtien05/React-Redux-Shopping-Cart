import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './LayoutDefault.css'
import { useSelector } from 'react-redux';
function LayoutDefault() {
  const cart = useSelector(state => state.cartReducer);
  const totalItem = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <NavLink to='/'>Logo</NavLink>
        </div>
        <div className='header__cart'>
          <NavLink to='/cart'>Cart ({totalItem})</NavLink>
        </div>
      </header>

      <main className='main'>
        <Outlet />
      </main>

      <footer className='footer'>
        Copyright @ 2023
      </footer>
    </>
  )
}

export default LayoutDefault