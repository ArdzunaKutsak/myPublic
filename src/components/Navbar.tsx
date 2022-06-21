import { Layout, Menu, Row } from 'antd'
import React, { FC ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes/index';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
    const navigate = useNavigate()
    const {isAuth, user} = useTypeSelector(state => state.auth)
    const {logout} = useActions()
    const logoutHandler = () => {
        logout()
    }
    useEffect (()=>{
        if(isAuth) navigate('/')
        else navigate('/login')
    }
    ,[isAuth])
  return (
    <Layout.Header>
        <Row justify='end'>
            {
                isAuth
                ?  
                <Menu theme='dark' mode='horizontal' selectable={false}>
                <div style={{color: '#fff'}}>{user.username}</div>
                <Menu.Item 
                    onClick={logoutHandler} 
                    key={1}
                    >Выйти</Menu.Item>
                </Menu>
               
                :
                <Menu theme='dark' mode='horizontal' selectable={false}>
                <Menu.Item 
                    onClick={()=>{navigate(RouteNames.LOGIN)}} 
                    key={2}
                    >Логин</Menu.Item>
                </Menu>
            }
           
        </Row>
    </Layout.Header>
  )
}

export default Navbar