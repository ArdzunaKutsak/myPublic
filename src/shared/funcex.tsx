import { preventDefault } from "../utilits/preventDefault";
import { stopPropagation } from "../utilits/stopPropagation";
import { pickFromSynteticEvent } from "../utilits/pickFromSynteticEvent";
import React from 'react';

const add = (leftside: number) => (rightside: number) => leftside+rightside;
add(1)(1);

// function add( leftside: number) {
//     return (rightside: number) => leftside + rightside;
// }
// функция высшего порядка это функция принимающая в себя другую функцию
const addOne = add(1);
addOne(5);




interface InputProps {
    onChange: (value: string) => void;
    value: string;
}

// function Input ({value, onChange}: InputProps) {
//     return (
//         <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
//     );
// }


export function MyHooks(title: {title:string}) {
    React.useEffect(()=> {
        console.log('componentDidMount')
        console.log('componentWillUpdate')
    })
    return (
        <div>{title}</div>
    )
}

function useIsMounted() {
    const [ isMounted, setIsMounted ] = React.useState(false)
    React.useEffect(()=>{
        setIsMounted(true)
    }, [])

    return [isMounted]
}


const generateRandomString = () => Math.random().toString(36).substring(2,15)



