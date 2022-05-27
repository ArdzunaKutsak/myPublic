import React from 'react'
import './navbar.css'

function NavBar({name, surname}) {
  return (
    <li className='container'>
        <img src='../../assests/anon.png' />
        <div className='name'>{name}</div>
        <div className='surname'>{surname}</div>
    </li>
  );
}

export default NavBar;