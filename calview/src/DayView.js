import { Component } from 'react'
import './DayView.css'

class DayView extends Component {

    render() {
        return (
            <div className="DayView">
                <h3>day={this.props.dayOfWeek}</h3>
                {this.props.events}
            </div>
        )
    }
}

export default DayView
