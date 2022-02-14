import React, {Component} from 'react';
import Google from "../img/google.png";


class Button extends Component {
    render() {
        const {label ,src} = this.props;
        return (
            <div >
                <button className="btn-size col-gap horizontal-center vertical-center">
                    <img src={src}  className="img-20"/>
                    {label}
                </button>
            </div>
        );
    }
}

export default Button;