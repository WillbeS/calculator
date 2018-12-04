import React from 'react';

const Input = (props) => {
    let type = props.type || 'text';

    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <input
                type={type}
                className='form-control'
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changeHandler}
                onBlur={props.blurHandler} />
        </div>
    );
}

export default Input;