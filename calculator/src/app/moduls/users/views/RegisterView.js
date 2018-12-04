import React from 'react';
import Input from '../../../components/ui/forms/Input';
import Submit from '../../../components/ui/forms/Submit';

const RegisterView = (props) => {
    return (
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <form>
                    <div>{props.errors.username}</div>
                    <Input
                        name='username'
                        placeholder='Username'
                        value={props.user.username}
                        changeHandler={props.changeHandler}
                        blurHandler={props.blurHandler} />

                    <div>{props.errors.password}</div>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={props.user.password}
                        changeHandler={props.changeHandler}
                        blurHandler={props.blurHandler} />

                    <div>{props.errors.repeatPassword}</div>
                    <Input
                        type='password'
                        name='repeatPassword'
                        placeholder='Confirm  Password'
                        value={props.user.repeatPassword}
                        changeHandler={props.changeHandler}
                        blurHandler={props.blurHandler} />
                    <br />
                    <Submit
                        value='Register'
                        submitHandler={props.submitHandler} />
                </form>
            </div>
        </div>
    );
}

export default RegisterView;