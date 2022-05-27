import React from 'react'
import styles from './navbar.module.css'

function NavBar() {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Concert CLUB</span>
      <ul className={styles.btn_bar}>
        <li><button className={styles.btn}>Версия для слабовидящих</button></li>
        <li><button className={styles.btn}>Мой профиль</button></li>
      </ul>
    </div>
  );
}

export default NavBar;
