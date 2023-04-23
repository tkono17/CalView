import DayView from './DayView.js'
import Event from './Event.js'

function WeekView(props) {
  const day1_events = (<Event name="class A"
    dayOfWeek="1" startTime="13:20" endTime="16:30" />
  )
  const day3_events = [
    <Event name="class B" dayOfWeek="3" startTime="10:40" endTime="12:10" />,
    <Event name="class C" dayOfWeek="3" startTime="13:20" endTime="14:50" />
  ]
  return (
    <div className="WeekView">
      <DayView day="1" events={day1_events} />
      <DayView day="3" events={day3_events} />
    </div>
  )
}

export default WeekView
