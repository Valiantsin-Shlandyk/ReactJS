import React from 'react';
import './style.css';

const Input = props => {
    let validationError = null;
    if (props.touched && props.invalid) {
        validationError = (
            <div className='warning_container'>
                <label className='warning'>{props.errorMessage}</label>
            </div>
        )
    }
    
    return (
        <React.Fragment>
        <div className='container'>
            <input
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            >
            </input>
        </div>
        {validationError}
        </React.Fragment>      
    )
}

export default Input;
