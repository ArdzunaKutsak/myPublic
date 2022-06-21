import { AuthAction, AuthActionsEnum, ISetAuthAction, ISetError, ISetUser, ISetIsLoading } from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../api/userService';


export const AuthActionCreators = {
    setUser: (user:IUser):ISetUser => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setError: (error:string):ISetError => ({type: AuthActionsEnum.SET_ERROR, payload: error}),
    setIsAuth: (payload:boolean): ISetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: payload}),
    setIsLoading: (payload:boolean):ISetIsLoading => ({type: AuthActionsEnum.SET_IS_LOADING, payload: payload}),
    login: (username: string, password:string):any => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout( async ()=>{
                const response = await UserService.getUser()
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if(mockUsers){
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch(AuthActionCreators.setUser(mockUsers))
                    dispatch(AuthActionCreators.setIsAuth(true))
                }
                else {
                    dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
                }   
                dispatch(AuthActionCreators.setIsLoading(false))
            },1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Ошибка'))

        }
        
    },
    logout: ():any => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setIsAuth(false))
            dispatch(AuthActionCreators.setUser({} as IUser))
    }
}