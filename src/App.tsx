import React, { useEffect, useState } from 'react';
import './main.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { Card } from './shared/CardsList/Card';
import { GenericList } from './genericList';
import { generateId, generateRandomString, random } from './utilits/generateRandomIndex';
import { merge } from './utilits/merge';
import { DropDown } from './shared/DropDown';
import './app.css'
import { EColor, Text } from './shared/Text';
import { useToken } from './hooks/useToken';
// const LIST = [
//     {value: 'some'},
//     {value: 'some else'},
//     {value: 'some'},
// ].map(generateId)
// .map((item) => ({...item, id:generateRandomString() }))
// const DROP_LIST = [
//     {icon: '../img/dropdown/Comments.svg', text: 'Комментарии', onClick: () => {}},
//     {icon: '../img/dropdown/Share.svg', text: 'Поделиться', onClick: () => {}},
//     {icon: '../img/dropdown/Hide.svg', text: 'Скрыть', onClick: () => {}},
//     {icon: '../img/dropdown/Save.svg', text: 'Сохранить', onClick: () => {}},
//     {icon: '../img/dropdown/Complain.svg', text: 'Пожаловаться', onClick: () => {}},
//     {icon: '', text: 'Закрыть', onClick: () => {}},
// ].map((item) => ({...item, id:generateRandomString() }))

function AppComponent() {
    const [token] = useToken()
    
    return (
        <Layout>
           <Header token={token} />
            <Content>
                
               <CardsList>
                   <Card/>
                   <Card/>
               </CardsList>
            
            </Content>
            
        </Layout>
    )
}

export const App = hot(() => <AppComponent />)