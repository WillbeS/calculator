import Storage from '../../../core/storage/LocalStorage';
import actionTypes from '../../constants/actionTypes';
import UserRepo from '../../../core/remote/kinvey/UserRepo';

const userRepo = new UserRepo('user');

function loginSuccess() {
    return {
        type: actionTypes.LOGGIN_SUCCESS,
    };
}

function authError(msg) {
    return {
        type: actionTypes.REMOTE_ERROR,
        message: msg
    }
}

function logoutSuccess() {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
    };
}


//ascync
function register(userObj) {
    const user = {
        username: String(userObj.username).toLowerCase(),
        password: String(userObj.password)
    };

    if (user.password !== String(userObj.repeatPassword)) {
        throw new Error('Password missmatch.');
    }

    return (dispatch) => {
        return userRepo.register(user)
            .then(data => {
                Storage.authenticateUser(data._kmd.authtoken);
                dispatch(loginSuccess());
            }).catch(err => {
                dispatch(authError(userRepo.handleError(err)));
            });
    };
}

function login(user) {
    return (dispatch) => {
        return userRepo.login(user)
            .then(data => {
                Storage.authenticateUser(data._kmd.authtoken);
                dispatch(loginSuccess());
            }).catch(err => {
                dispatch(authError(userRepo.handleError(err)));
            });
    };
}

function logout() {
    return (dispatch) => {
        return userRepo.logout()
            .then(data => {
                Storage.deauthenticateUser();
                dispatch(logoutSuccess());
            }).catch(err => {
                dispatch(authError(userRepo.handleError(err)));
            });
    };
}


export { register, login, logout };