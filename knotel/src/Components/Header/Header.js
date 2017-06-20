import React, {Component} from 'react';
import Top from "../Top/Top";
import Nav from "../Nav/Nav";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Top top={this.props.top}/>
                <img src={require('../../images/LogoAndText.svg')} alt="logo"/>
                <h1 className="Header__title">{this.props.header.title}</h1>
                <h3 className="Header__subtitle">{this.props.header.subtitle}</h3>
                <button className="Header__button button-tour">{this.props.header.buttons[0].name}</button>
                <Nav items={this.props.header.navs}/>
                <button className="Header__button button-route">{this.props.header.buttons[1].name}</button>
                <Nav items={this.props.header.subbuttons}/>
            </div>
        )
    }
}
export default Header;