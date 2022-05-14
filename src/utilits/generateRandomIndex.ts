import { assoc } from "./assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2,15);

export function random(item: {value:string}) {
    return (
        {...item, id:generateRandomString()}
    )
}

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj:O) => {console.log(obj); return assignId(obj)};

