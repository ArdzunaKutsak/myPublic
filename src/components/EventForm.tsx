import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { Moment } from 'moment';
import React, { FC, useState } from 'react'
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { rules } from '../utils/rules'
import { formateDate } from '../utils/date';
import { useTypeSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
  const {user} = useTypeSelector(state => state.auth)
  const [event, setEvent] = useState<IEvent>({
    author: user.username,
    date:'',
    description:'',
    guest:'',
  } as IEvent)

  const selectDate = (date:Moment | null) => {
    if (date)
      setEvent({...event, date: formateDate(date?.toDate())})
  }


  const submitForm = () => {
    props.submit(event)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={submitForm}
    //   onFinishFailed={onFinishFailed} 
      autoComplete="off"
    >
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={e=>setEvent({...event, description: e.target.value})} />

      </Form.Item>
      <Form.Item
        label="Дата события"
        name='date'
        rules={[rules.required(), rules.isDateAfter('Нельзя создать событие в прошлом')]}
      >
        <DatePicker 
          onChange={(e)=>selectDate(e)}
          />

      </Form.Item>
      <Form.Item
        label='Выберите гостя'
        name='guest'
        >
        <Select onChange={(guest: string)=>setEvent({...event, guest: guest})}>  
            {props.guests.map((guest:IUser) => 
                <Option 
                    key={guest.username}
                    value={guest.username}>
                    {guest.username}
                </Option>
            )}
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item
        >
            <Button 
              type="primary" htmlType="submit">Создать</Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm