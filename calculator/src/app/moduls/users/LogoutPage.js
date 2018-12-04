import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';

import { logout } from './userActions';


class LoginPage extends React.Component {

    componentWillMount() {
        this.props.logout();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
        }

        if (!newProps.loggedIn) {
            this.props.history.push('/login');
        }
    }


    render() {
        return null;
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
        logout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);