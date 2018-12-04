import { userReducer } from './moduls/users/userReducer';
import { itemReducer } from './moduls/items/itemReducer';

export default {
    auth: userReducer,
    item: itemReducer,
};