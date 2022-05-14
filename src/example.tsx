import { values } from "../webpack.config";
import React, { AllHTMLAttributes } from 'react';
function myConcat (arg1:string, arg2:string): string {
    return arg1 + arg2;
}

myConcat('aa', 'ss')


interface myInterface {
    howIDoIt: string,
    simeArray: Array <string | number>,
    withData: [{ howIDoIt: string, simeArray: Array<string | number> }],
}

const MyHometask: myInterface = { 
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
    
}

interface MyArray<T> { 
    [N: number]: T,
    map(fn: (val: T) => T): T[],
    reduce(func: (accum:number, item:T ) => number, initVal:number) : number
}

const myArr : MyArray<number> = [1,2,3];
myArr.reduce((acc, item) => acc += item, 0)

interface IHomeTask {
        data: string;
        numbericData: number;      
        externalData: {
            basis: number;
            value: string;
        }
    }

type MyPartial<T> = {[N in keyof T]?: MyPartial<T[N]>}

        
// type MyPartial<T> = T extends object ? {  //// DEEP PARTIAL!!
//     [P in keyof T]?: MyPartial<T[P]>
// } : T

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'string'
    },
}


function HomeComponent(props: { firstProp: string }) {
     return (
     <div>
        {props.firstProp}
     </div>
    )
}

interface IProps<T> {
    firstProp: T
}

type TMyType<T> = T extends ((arg: IProps<infer R>) => any) ? R : never;
type t = TMyType<typeof HomeComponent>


type TDivElement = JSX.IntrinsicElements['div'];
type TGetJSXPropsProp = AllHTMLAttributes<TDivElement>

const div:TGetJSXPropsProp = {className: 'awd', id: 'awd', tabIndex: 2}