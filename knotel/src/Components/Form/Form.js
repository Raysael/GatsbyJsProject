import React, {Component} from 'react';
import InputBox from "../InputBox/InputBox";

class Form extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <h1 className="Form__title">{this.props.items.title}</h1>
                <div className="Form-container">
                    <h3 className="Form-container__subtitle">{this.props.items.subtitle}</h3>
                    <InputBox items={this.props.items.inputs} state={this.state}
                              handleInputChange={this.handleInputChange}/>
                    <button>{this.props.items.submit}</button>
                </div>
            </form>
        )
    }
}
export default Form;