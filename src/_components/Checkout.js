import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { REACT_APP_NOTIFY_URL, REACT_APP_RETURN_URL } from '../config';
import Loader from './Loader';
import { submitPayment } from '../_actions/payment.action';

class Checkout extends Component {


    handleSubmit = () => {
        const payment_method = this.props.activePayment; // e.g: wechatpay 
        const amount = this.props.selectedPrice; // 100 for 1YUAN
        const notify_url = REACT_APP_NOTIFY_URL; //e.g: http://dhy7788.com/notify/wechat
        const return_url = REACT_APP_RETURN_URL; //e.g: http://dhy7788.com/pay/success

        const paymentObj = {
            'amount': amount,
            'payment_method': payment_method,
            'notify_url': notify_url,
            'return_url': return_url,
            'order_num': 'testing123', //optional
            'browser_ip_address': 'provideCustomerIP', //optional
            'browser_mac_address': 'provideCustomerMacAddress', //optional
        };

        if (this.props.selectedPrice === "") {
            alert('Please select amount')
        } else {
            console.log(paymentObj);
            this.props.submitPayment(paymentObj, this.props.history);
        }
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Loader /> : ''}
                <div className="btn-container">
                    <button className="submit-btn" onClick={() => { this.handleSubmit() }}>付账</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        activePayment: state.paymentReducer.paymentBrand,
        selectedPrice: state.paymentReducer.selectedPrice,
        isLoading: state.isLoading
    })
};

export default withRouter(connect(mapStateToProps, { submitPayment })(Checkout));