import React, {Component} from 'react';

class InputBox extends Component {
    render() {
        return (
            <div className="InputBox">
                {this.props.items.map((item, index) => {
                    return <input
                        key={index}
                        placeholder={item.placeholder}
                        name={'input-evh-' + index}
                        type="text"
                        value={this.props.state['input-evh-' + index]}
                        onChange={this.props.handleInputChange}/>
                })}
            </div>
        )
    }
}
export default InputBox;