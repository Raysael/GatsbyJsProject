import React, {Component} from 'react';

class Whiteframes extends Component {
    render() {
        return (
            <div className="Whiteframes">
                <h3 className="Aside__title">{this.props.items.title}</h3>
                {this.props.items.whiteframe.map((item, index) => {
                    return <div key={index} className="whiteframe">
                        <div className="whiteframe__image">
                            <img src={item.img} alt="img"/>
                        </div>
                        <div className="whiteframe-description">
                            <div className="whiteframe-description-dateBlock">
                                <div className="whiteframe-description-dateBlock__date">{item.date}</div>
                                <div className="whiteframe-description-dateBlock__month">{item.month}</div>
                            </div>
                            <h3 className="whiteframe-description__title">{item.title}</h3>
                            <p className="whiteframe-description__text">{item.timeAt} to {item.timeTo} at Knotel {item.where}</p>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
export default Whiteframes;