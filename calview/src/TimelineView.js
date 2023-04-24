import React from 'react'
import Timeline from './Timeline.js'
import Event from './Event.js'
import './TimelineView.css'

class TimelineView extends React.Component {

    render() {
        var dayStart = '8:00'
        var dayEnd = '18:00'
        const day1_events = [
            <Event name="class A" index="1" startTime="13:20" endTime="16:30" />
        ]
        const day3_events = [
            <Event name="class B" index="3" startTime="10:40" endTime="12:10" />,
            <Event name="class C" index="3" startTime="13:20" endTime="14:50" />
        ]
        return (
            <div className="TimelineView">
                <h3>{this.props.title}</h3>
                <div>
                    <Timeline index="1" startTime={dayStart} endTime={dayEnd} events={day1_events} />
                    <Timeline index="2" startTime={dayStart} endTime={dayEnd} />
                    <Timeline index="3" startTime={dayStart} endTime={dayEnd} events={day3_events} />
                    <Timeline index="4" startTime={dayStart} endTime={dayEnd} />
                    <Timeline index="5" startTime={dayStart} endTime={dayEnd} />
                </div>
            </div>
        )
    }
}

export default TimelineView
