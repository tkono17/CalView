import { Component } from 'react'
import './Timeline.css'

class TimeLine extends Component {

    render() {
        return (
            <div className="TimeLine">
                <h3>day={this.props.index}</h3>
                {this.props.events}
            </div>
        )
    }
}

export default TimeLine
