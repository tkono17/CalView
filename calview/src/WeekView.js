import React from 'react'
import DayView from './DayView.js'
import Event from './Event.js'
import './WeekView.css'

class WeekView extends React.Component {

    render() {
        var dayStart = '8:00'
        var dayEnd = '18:00'
        const day1_events = [
            <Event name="class A" dayOfWeek="1" startTime="13:20" endTime="16:30" />
        ]
        const day3_events = [
            <Event name="class B" dayOfWeek="3" startTime="10:40" endTime="12:10" />,
            <Event name="class C" dayOfWeek="3" startTime="13:20" endTime="14:50" />
        ]
        return (
            <div className="WeekView">
                <h3>Week view</h3>
                <DayView dayOfWeek="1" startTime={dayStart} endTime={dayEnd} events={day1_events} />
                <DayView dayOfWeek="2" startTime={dayStart} endTime={dayEnd} />
                <DayView dayOfWeek="3" startTime={dayStart} endTime={dayEnd} events={day3_events} />
                <DayView dayOfWeek="4" startTime={dayStart} endTime={dayEnd} />
                <DayView dayOfWeek="5" startTime={dayStart} endTime={dayEnd} />
            </div>
        )
    }
}

export default WeekView
