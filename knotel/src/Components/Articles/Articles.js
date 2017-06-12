import React, {Component} from 'react';

class Articles extends Component {
    render() {
        return (
            <div className="Articles">
                {this.props.items.map((item, index) => {
                    return <div key={index} className="Articles-content">
                        <h3 className="Articles-content__title">{item.title}</h3>
                        <p className="Articles-content__text">{item.text}</p>
                        <div className="Articles-content__image">
                            <img src={item.img} alt="img"/>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
export default Articles;
