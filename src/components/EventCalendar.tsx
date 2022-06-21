import { Calendar,Badge,BadgeProps } from 'antd'
import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment';
import { formateDate } from '../utils/date';

interface ICalendarProps {
    events:IEvent[],
}

const EventCalendar: FC<ICalendarProps> = (props) => {


  const dateCellRender = (value: Moment) => {
    const formatedDate = formateDate(value.toDate())
    const currentDayEvents = props.events.filter(event => event.date === formatedDate)
    return (
      <div className="events">
        {currentDayEvents.map((e, index) => (
            <div key={index}>{e.description}</div>
        ))}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender}/>;
}

export default EventCalendar