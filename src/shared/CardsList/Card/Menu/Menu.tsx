import React from 'react';
import { DropDown } from '../../../DropDown';
import { MenuIcon } from '../MenuIcon';
import { DropMenu } from '../DropMenu';
import styles from './menu.css';
import { generateRandomString } from '../../../../utilits/generateRandomIndex';



const DROP_LIST = [
  { text: 'Комментарии', onClick: () => {}},
  { text: 'Поделиться', onClick: () => {}},
  { text: 'Скрыть', onClick: () => {}},
  { text: 'Сохранить', onClick: () => {}},
  { text: 'Пожаловаться', onClick: () => {}},
  { text: 'Закрыть', onClick: () => {}},
].map((item) => ({...item, id: generateRandomString() }))


export function Menu() {
  const [list, setList] = React.useState(DROP_LIST);
  return (
    <DropDown
    button={<button className={styles.menu}>
        <MenuIcon />
    </button>}>
    <DropMenu list={list}/>
    </DropDown>
  );
}
