import React, {Component} from 'react';
import Articles from "../Articles/Articles";

class Section extends Component {
    render() {
        const handleIgnore = () => {
            if (this.props.name !== 'location') {
                return (
                    <div className={"Section-" + this.props.name}>
                        <Articles items={this.props.items.content}/>
                    </div>
                )
            }
            else if (this.props.name === 'location') {
                // <svg>
            }
        };

        return (
            <div className="Section">
                <h1 className="Section__title">{this.props.items.title}</h1>
                {handleIgnore()}
            </div>
        )
    }
}
export default Section;