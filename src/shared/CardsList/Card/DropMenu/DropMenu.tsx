import React from 'react';
import styles from './dropmenu.css';
import { Icons } from './Icons';

interface IItem {
    text: string,
    onClick?: ( ) => void,
    id: string,
}
 // As?: 'a' | 'li' | 'button' | 'div',
interface IDropMenu {
    list: IItem[],
   
}
// import svg from `${icon}`
export function DropMenu({list}: IDropMenu) {
   
    return (
        
        <>
        {list.map(({ text, onClick, id}) => (
            <li
            onClick = {() => console.log(id)}
            key={id}
            className={styles.dropitemContainer}
            >   
                <div  className={styles.dropitem}><Icons value={text} />{text}</div>
            </li>
        ))}
        </>  
    )
}
