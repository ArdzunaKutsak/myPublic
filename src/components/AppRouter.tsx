import React, { FC } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypedSelector';
import Event from '../pages/Event';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter: FC = () => {
    const {isAuth} = useTypeSelector(state => state.auth)
    return (
        <Routes>
            {
            isAuth 
            ?
            privateRoutes.map(({path, Component}) => 
                <Route 
                    path={path} 
                    key={path} 
                    element={<Component/>} 
                    />)
            :
            publicRoutes.map(({path, Component}) => 
                <Route 
                    path={path} 
                    key={path} 
                    element={<Component/>} 
                    />) 
            }
        </Routes> 
    )
}

export default AppRouter