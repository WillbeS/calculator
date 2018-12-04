import actionTypes from '../../constants/actionTypes';
import ItemRepository from './ItemRepository';

const itemRepo = new ItemRepository();

function remoteError(msg) {
    return {
        type: actionTypes.REMOTE_ERROR,
        message: msg
    }
}

function createSuccess(data) {
    return {
        type: actionTypes.ITEM_CREATED,
        data
    };
}


//ascync
function create(item) {
    return (dispatch) => {
        return itemRepo.create(item)
            .then(data => {
                dispatch(createSuccess(data));
            }).catch(err => {
                const msg = itemRepo.handleError(err);
                dispatch(remoteError(msg));
            });
    };
}



export { create };