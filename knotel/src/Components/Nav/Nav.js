import React, {Component} from 'react';

class Nav extends Component {
    constructor() {
        super();
        this.state = {};
        this.onClickRoute = this.onClickRoute.bind(this)
    }

    onClickRoute(event) {
        console.log(event.target.name)
    }

    render() {
        return (
            <div className="Nav">
                {this.props.items.map((item, index) => {
                    return <button key={index} name={item.route} className="Nav__button"
                                   onClick={this.onClickRoute}>{item.name}</button>
                })}
            </div>
        )
    }
}
export default Nav;