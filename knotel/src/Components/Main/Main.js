import React, {Component} from 'react';
import Section from "../Section/Section";
import Form from "../Form/Form";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Section items={this.props.sections.location} name='location'/>
                <Section items={this.props.sections.spaces} name='spaces'/>
                <Section items={this.props.sections.services} name='services'/>
                <Form items={this.props.form}/>
            </div>
        )
    }
}
export default Main;