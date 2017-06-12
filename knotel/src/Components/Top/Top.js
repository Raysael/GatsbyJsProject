import React, {Component} from 'react';

class Top extends Component {
    render() {
        return (
            <div className="Top">
                <div className="Top__logo">
                    <svg width="100%" height="100%" viewBox="28 0 200 200" preserveAspectRatio="xMidYMid meet"
                         version="1.1" data-radium="true">
                        <g id="Land-+-Overview" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           data-radium="true">
                            <g id="Land-+-Overview---Desktop-HD" transform="translate(-591.000000, -246.000000)"
                               fill="#FEFEFE" data-radium="true">
                                <g id="Section-1---Land" data-radium="true">
                                    <g id="Logo-Lockup" transform="translate(460.000000, 120.000000)"
                                       data-radium="true">
                                        <polyline id="Flag" points="334 126 260 322 186 126"></polyline>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="Top__phone">{this.props.top.phone}</div>
                <div className="Top__email">{this.props.top.email}</div>
                <button className="Top__button">{this.props.top.button.name}</button>
            </div>
        )
    }
}
export default Top;