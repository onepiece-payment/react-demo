import { userConstants } from '../_constants';

const initialState = {
    paymentBrand: 'alipay',
    availablePaymentMethods: [],
    paymentInfo: {},
    priceList: [],
    selectedPrice: ''
}

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {

        case userConstants.AVAILABLE_PAYMENT_METHODS:
            return { ...state, availablePaymentMethods: action.payload };
        case userConstants.ACTIVE_PAYMENT:
            return { ...state, paymentBrand: action.paymentBrand };
        case userConstants.INITIATE_PAYMENT_SUCCESS:
            return { ...state, paymentInfo: action.payload }
        case userConstants.INITIATE_PAYMENT_FAILURE:
            return { ...state, paymentInfo: {} }
        case userConstants.FETCH_PRICE_LIST:
            return { ...state, priceList: action.payload }
        case userConstants.SELECTED_PRICE:
            return { ...state, selectedPrice: action.price }
        default:
            return state;
    }
}
export default paymentReducer;