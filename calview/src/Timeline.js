import { Component } from 'react'
import './calview.css'

class TimeLine extends Component {

    render() {
        return (
            <div className="Timeline">
                <h3>index={this.props.index}</h3>
                {this.props.events}
            </div>
        )
    }
}

export default TimeLine
