import React from 'react';
import toastr from 'toastr';
import {connect} from 'react-redux';

import {register} from './userActions';
import RegisterView from './views/RegisterView';
import UserValidRules from './UserValidRules';
import FormHelper from '../../../core/utils/FormHelper';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                repeatPassword: '',
            },
            errors: [],
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
        }

        if (newProps.loggedIn) {
            toastr.success('User registration successfull!');
            this.props.history.push('/');
        }
    }

    changeHandler(event) {
        FormHelper.handleInputChange.bind(this)(event, 'user');
    }

    blurHandler(event) {
        FormHelper.handleValidation.bind(this)(event, UserValidRules);
    }


    submitHandler(event) {
        event.preventDefault();
        
        try {
            FormHelper.checkRequiredFileds.bind(this)(this.state.user, UserValidRules);
            this.props.register(this.state.user);
         } catch(error) {
             toastr.error(error);
         }
    }

    render() {
        return (
            <RegisterView
                user={this.state.user}
                errors={this.state.errors}
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                blurHandler={this.blurHandler} />
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register: (user) => dispatch(register(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);