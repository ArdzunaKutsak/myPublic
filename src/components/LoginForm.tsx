import { Button, Checkbox, Form, Input } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import { rules } from '../utils/rules';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const LoginForm: FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const { isAuth, error, isLoading} = useTypeSelector(state => state.auth)
    const {login} = useActions()
    
    const onFinish = () => {
        login(username,password)
    };

  
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
        {error && 
            <div style={{color:'red'}}>
                {error}
            </div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Пожалуйста введите имя пользователя!')]}
      >
        <Input 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Пожалуйста введите пароль!') ]}
      >
        <Input.Password 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
            Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm