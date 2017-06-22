import React, {Component} from 'react';

require('./Top.scss');

class Top extends Component {
    render() {
        return (
            <div className="Top">
                <div className="Top__logo">
                    <img src={require('../../images/LogoAndText.svg')} alt="logo"/>
                </div>
                <div className="Top__contacts">
                    <div className="Top__phone">{this.props.top.phone}</div>
                    <div className="Top__email">{this.props.top.email}</div>
                </div>
                <button className="Top__button">{this.props.top.button.name}</button>
            </div>
        )
    }
}
export default Top;