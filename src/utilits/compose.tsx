import React from 'react';
import { getValue } from './pickFromSynteticEvent';
import { preventDefault } from './preventDefault';
import { stopPropagation } from './stopPropagation';


function InputExample({ value, onChange}: any) {
    return (
        <input
        value={value}
        onChange={preventDefault(stopPropagation(getValue(onChange)))} 
        />
    )
}

function compose<U>(...fns: Function[]) {
    return <E,> (initialValue: any): U =>
    fns.reduceRight((previosValue, fn) => fn(previosValue), initialValue)
}

// EXAMPLE USE => onChange={compose(onChange, getValue, stopPropaganation, preventDefault)}

function pipe<U> (...fns: Function[]) {
    return <E,> (initialValue: any): U =>
    fns.reduce((previosValue, fn) => fn(previosValue), initialValue)
}

// there are functions flow left to right 

function pick <K extends string> (prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

function isEqual <T> (left: T) {
    return <E extends T>(right: E) => left === right
}

const comments = [{id: 1, value:'awd'}, {id:2, value:'wda'}]

// const filterComments = comments.filter(({id}) => id == 1)

const filterComments = comments.filter(pipe(pick('id'), isEqual(1), cond))

function cond(b: boolean) {
    return !b
}


const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
)