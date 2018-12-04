import React from 'react';

const Submit = (props) => {
    return (
        <div>
            <input
                className='btn btn-primary'
                type='submit'
                value={props.value}
                onClick={props.submitHandler} />
        </div>
    );
}

export default Submit;