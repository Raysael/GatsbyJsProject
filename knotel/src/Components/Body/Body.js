import React, {Component} from 'react';
import Main from "../Main/Main";
import Aside from "../Aside/Aside";

class Body extends Component {
    render() {
        return (
            <div className="Body">
                <Main sections={this.props.sections} form={this.props.form}/>
                <Aside events={this.props.events}/>
            </div>
        )
    }
}
export default Body;