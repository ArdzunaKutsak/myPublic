import React from 'react';
import './app.css'

interface IItem {
    text: string,
    onClick?: ( ) => void,
    icon?: string,
    id: string,
}
 // As?: 'a' | 'li' | 'button' | 'div',
interface IGenericList {
    list: IItem[],
   
}
// import svg from `${icon}`
export function GenericList({list}: IGenericList) {
    
    return (
        <>
        {list.map(({ text, onClick, icon, id}) => (
            <li
            onClick = {onClick}
            key={id}
            className='dropitem'
            >    
                {text}
            </li>
        ))}
        </>  
    )
}