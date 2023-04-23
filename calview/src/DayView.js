function DayView(props) {
  return (
    <div className="DayView">
      day={props.day}
      {props.events}
    </div>
  )
}

export default DayView
