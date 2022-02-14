import React, {Component} from 'react';

class Input extends Component {
    render() {

        const { label, isPassword = false, id ,placeholder} = this.props

        return (
            <div className="row ">
                <label htmlFor={id}>{label}</label> <br/>
                <input type={isPassword ? 'password' : 'text'} id={id} className="size-100 border-radius" placeholder={placeholder}/>
            </div>
        );
    }
}

export default Input;