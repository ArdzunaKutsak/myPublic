import React from 'react'
import styles from './navbar.css'

function NavBar() {
  return (
    <div className={styles.container}>
      <span className='logo'>Concert CLUB</span>
      <ul className='btn-bar'>
        <li><button className='btn'>Версия для слабовидящих</button></li>
        <li><button className='btn'>Мой профиль</button></li>
      </ul>
    </div>
  );
}

export default NavBar;
