import Event from '../pages/Event';
import Login from '../pages/Login';
import React from 'react';
import { FC } from 'react';

export interface IRoute {
    path: string,
    Component: FC,
    exact?: boolean,
}
export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
}
export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, Component: Login}
    // 
]
export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, Component: Event}
    // 
]