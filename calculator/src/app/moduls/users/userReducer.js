import actionTypes from '../../constants/actionTypes';
import Storage from '../../../core/storage/LocalStorage';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            return Object.assign({}, state, { loggedIn: Storage.isUserAuthenticated(), error: false });

        case actionTypes.LOGGIN_SUCCESS:
            return Object.assign({}, state, { loggedIn: true, error: false });

        case actionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, { loggedIn: false, error: false });

        case actionTypes.REMOTE_ERROR:
            return Object.assign({}, state, { loggedIn: false, error: action.message });

        default:
            return state;
    }
}