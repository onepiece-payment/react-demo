import OPSdk from 'op-sdk';
import { userConstants } from '../_constants';
import { REACT_APP_PIRATE_TOKEN, REACT_APP_PIRATE_KEY } from '../config';

let newMerchant = new OPSdk(REACT_APP_PIRATE_TOKEN, REACT_APP_PIRATE_KEY);

export const getAvailablePaymentMethods = () => async (dispatch) => {
    console.log(newMerchant.pirate_token);
    try {
        const newResults = await newMerchant.findPaymentMethods();
        if (newResults.status === false) {
            throw new Error(newResults.message);
        } else {
            const payload = newResults.methods
            dispatch({
                type: userConstants.AVAILABLE_PAYMENT_METHODS,
                payload
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const submitPayment = (paymentObj, history) => async (dispatch) => {
    try {
        startLoader(dispatch);
        alert(JSON.stringify(paymentObj))
        const newTransaction = await newMerchant.initPayment(paymentObj);
        if (newTransaction.status === false) {
            throw new Error(newTransaction.message)
        } else {
            window.location.href = newTransaction.qrcode_url
        }
    } catch (err) {
        alert(err);
        console.log(err);
    }
};

// export const getAvailablePaymentMethods = () => {
//     console.log(newMerchant.pirate_token);
//     return async (dispatch) => {
//         const newResults = await newMerchant.findPaymentMethods();
//         const payload = newResults.methods
//         dispatch({
//             type: userConstants.AVAILABLE_PAYMENT_METHODS,
//             payload
//         })
//     }
// };

// export const submitPayment = (paymentObj, history) => {
//     return async (dispatch) => {
//         startLoader(dispatch);
//         const newTransaction = await newMerchant.initPayment(paymentObj);
//         window.location.href=newTransaction.qrcode_url
//     }
// };

export const getAvailablePriceList = () => {
    return async (dispatch) => {
        const newPriceList = await newMerchant.findAvailablePriceList();
        const payload = newPriceList.prices
        dispatch({
            type: userConstants.FETCH_PRICE_LIST,
            payload
        })
    }
};

export const selectedPrice = (price) => {
    return ({
        type: userConstants.SELECTED_PRICE,
        price: price
    })
};

export const activePayment = (paymentBrand) => {
    return ({
        type: userConstants.ACTIVE_PAYMENT,
        paymentBrand: paymentBrand,
    })
};

const startLoader = (dispatch) => {
    dispatch({
        type: userConstants.START_LOADING
    })
};