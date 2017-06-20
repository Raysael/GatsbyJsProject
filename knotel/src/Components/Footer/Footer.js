import React, {Component} from 'react';
import Nav from "../Nav/Nav";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__logo">
                    <img src={require('../../images/LogoFooter.svg')} alt="logo"/>
                </div>
                <Nav items={this.props.footer.navs}/>
                <p className="Footer__copyright">{this.props.footer.copyright}</p>
            </div>
        )
    }
}
export default Footer;