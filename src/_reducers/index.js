import { combineReducers } from 'redux';

import { userConstants } from '../_constants/user.constants';

import isLoading from './loader';
import paymentReducer from './payment.reducer';


const appReducer = combineReducers({
    isLoading,
    paymentReducer
});

export default (state, action) => {

    if( action.type === userConstants.SIGN_OUT ) {
        state = undefined;
    }

    return appReducer(state, action)
}