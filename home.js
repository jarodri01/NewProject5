import React from 'react';
//import ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

class SchedulerCalendar extends React.Component{
    render(){
        return <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>

    }
};
export default SchedulerCalendar;