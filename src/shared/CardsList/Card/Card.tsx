import React from 'react';
import styles from './card.css';
import { CardPreview } from './CardPreview';
import { CardText } from './CardText';
import { Controls } from './Controls';
import { Menu } from './Menu';
// import { GenericList } from '../../../genericList'
// import { DropDown } from '../../DropDown';
// import { generateRandomString } from '../../../utilits/generateRandomIndex';
// import { DropMenu } from './DropMenu';
// import { Icons } from './Icons';

// const DROP_LIST = [
//   { text: 'Комментарии', onClick: () => {}},
//   { text: 'Поделиться', onClick: () => {}},
//   { text: 'Скрыть', onClick: () => {}},
//   { text: 'Сохранить', onClick: () => {}},
//   { text: 'Пожаловаться', onClick: () => {}},
//   { text: 'Закрыть', onClick: () => {}},
// ].map((item) => ({...item, id: generateRandomString() }))


export function Card() {
  // const [list, setList] = React.useState(DROP_LIST);
  return (
    <li className={styles.card} >    
      <CardText />
      <CardPreview />
      <Menu />
      <Controls />
     
    </li>
  );
}
