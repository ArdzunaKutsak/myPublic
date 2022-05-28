import React from 'react'
import styles from './usercard.module.css'
import icon from '../../assests/anon.png'
import {useNavigate } from 'react-router-dom'
import {USER_ROUTE} from '../../utils/consts'

function UserCard({user}) {
  const fullName = user.name.split(' ');
  const navigate = useNavigate();
  return (
    <li className={styles.card}>
      <button className={styles.container} onClick={()=>navigate(USER_ROUTE + '/' + user.id)}>
        <img className={styles.ava} src={icon} />
        <div className={styles.name}>{fullName[0]}</div>
        <div className={styles.surname}>{fullName[1]}</div>
      </button>
    </li>
  );
}

export default UserCard;