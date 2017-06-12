import React, {Component} from 'react';
import Whiteframes from "../Whiteframes/Whiteframes";

class Aside extends Component {
    render() {
        return (
            <div className="Aside">
                <Whiteframes items={this.props.events[0]}/>
                <Whiteframes items={this.props.events[1]}/>
            </div>
        )
    }
}
export default Aside;