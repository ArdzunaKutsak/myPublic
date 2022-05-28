import React, { useState,useContext,useEffect } from 'react'
import styles from './navbar.module.css'
import {large} from '../../assests/large'
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
  const navigate = useNavigate()
  const {visualVersion} = useContext(Context)
  const setVisualVersion = () => {
    visualVersion.setVisualVersion(visualVersion.largeVersion)
    visualVersion.setLargeVersion(visualVersion.largeVersion)
  }
  return (
    <div className={styles.container}>
      <button onClick={()=>{navigate('/')}} className={styles.logo}>Concert CLUB</button>
      <ul className={styles.btn_bar}>
        <li><button className={styles.btn} onClick={setVisualVersion}>{visualVersion.largeVersion ? 'Обычная версия' : 'Версия для слабовидящих'}</button></li>
        <li><button className={styles.btn}>Мой профиль</button></li>
      </ul>
    </div>
  );
})

export default NavBar;
