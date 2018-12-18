import { userConstants } from '../_constants';

const loaderReducer = (state = false, action) => {
  switch(action.type) {
    case userConstants.START_LOADING:
      return true;
    case userConstants.STOP_LOADING:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;