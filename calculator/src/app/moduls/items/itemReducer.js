import actionTypes from '../../constants/actionTypes';
//import AppHelper from '../components/common/AppHelper';

export function itemReducer(state = { data: {}, remote: null, error: null }, action) {
    switch (action.type) {
        case actionTypes.LOGOUT_SUCCESS:
            return { data: {}, remote: null, error: null };

        case actionTypes.ITEM_CREATED:
            let newState = Object.assign({}, state, { remote: actionTypes.ITEM_CREATED, error: null });
            newState.data[action.data._id] = action.data;
            return newState;

        case actionTypes.REMOTE_ERROR:
            return Object.assign({}, state, { error: action.message });

        default:
            return state;
    }
}