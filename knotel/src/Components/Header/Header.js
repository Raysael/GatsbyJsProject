import React, {Component} from 'react';
import Top from "../Top/Top";
import Nav from "../Nav/Nav";

require('./Header.scss');

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Top top={this.props.top}/>
                <div className="Header__logo">
                    <img src={require('../../images/LogoAndText.svg')} alt="logo"/>
                </div>
                <div className="Header-container">
                    <div className="Header-description">
                        <h1 className="Header__title">{this.props.header.title}</h1>
                        <h3 className="Header__subtitle">{this.props.header.subtitle}</h3>
                    </div>
                    <div className="Header-container__button">
                        <button className="Header__button button-tour">{this.props.header.buttons[0].name}</button>
                    </div>
                    <div className="Header-navigation">
                        <Nav items={this.props.header.navs}/>
                        <button className="Header__button button-route">{this.props.header.buttons[1].name}</button>
                    </div>
                </div>
                <Nav items={this.props.header.subbuttons}/>
            </div>
        )
    }
}
export default Header;