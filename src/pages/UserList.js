import React, {useContext, useEffect, useState} from 'react';
import { getUsers } from '../http/userAPI';
import styles from './css/userlist.module.css'
import { observer } from 'mobx-react-lite';
import UserCard from '../components/userCard/UserCard'
import userContext from '../App'

const UserList = observer(() => {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    getUsers().then(({data}) => setUsers(data))
    
  }, []);
 
  return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {users && users.map(user=><UserCard key={user.id} user={user} />)}
        </ul>
      </div>
  );
})
export default UserList;
