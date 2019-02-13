import React, { Component } from 'react';
import { connect } from 'react-redux';

import iconWechatpayColor from '../_img/wechat_color.png';
import iconWechatpayWhite from '../_img/wechat_white.png';
import iconAlipayColor from '../_img/alipay_color.png';
import iconAlipayWhite from '../_img/alipay_white.png';
import iconQqpayColor from '../_img/qq_color.png';
import iconQqpayWhite from '../_img/qq_white.png';
import iconJdpayColor from '../_img/jd_color.png';
import iconJdpayWhite from '../_img/jd_white.png';
import iconWechath5White from '../_img/H5_white.png';
import iconWechath5Color from '../_img/H5_color.png';
import iconAlipayh5White from '../_img/Alipay_H5_white.png';
import iconAlipayh5Color from '../_img/Alipay_H5_color.png';


import { activePayment } from '../_actions/payment.action';

class PaymentMethod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentMethod: ''
        };
    }

    componentDidMount() {
        this.setState({
            paymentMethod: this.props.name
        })
    }

    paymentBranding = () => {
        switch (this.state.paymentMethod) {
            // case 'wechatpay':
            //     return (
            //         this.props.paymentBrand === 'wechatpay'
            //             ? <img className="payment_button_selected" src={iconWechatpayWhite} alt="icon" />
            //             : <img className="payment_button" src={iconWechatpayColor} alt="icon" />
            //     );
            // case 'wechath5':
            //     return (
            //         this.props.paymentBrand === 'wechath5'
            //             ? <img className="payment_button_selected" src={iconWechath5White} alt="icon" />
            //             : <img className="payment_button" src={iconWechath5Color} alt="icon" />
            //     );
            case 'alih5':
                return (
                    this.props.paymentBrand === 'alih5'
                        ? <img className="payment_button_selected" src={iconAlipayh5White} alt="icon" />
                        : <img className="payment_button" src={iconAlipayh5Color} alt="icon" />
                );
            case 'alipay':
                return (
                    this.props.paymentBrand === 'alipay'
                        ? <img className="payment_button_selected" src={iconAlipayWhite} alt="icon" />
                        : <img className="payment_button" src={iconAlipayColor} alt="icon" />
                );
            case 'qqpay':
                return (
                    this.props.paymentBrand === 'qqpay'
                        ? <img className="payment_button_selected" src={iconQqpayWhite} alt="icon" />
                        : <img className="payment_button" src={iconQqpayColor} alt="icon" />
                );
            case 'jdpay':
                return (
                    this.props.paymentBrand === 'jdpay'
                        ? <img className="payment_button_selected" src={iconJdpayWhite} alt="icon" />
                        : <img className="payment_button" src={iconJdpayColor} alt="icon" />
                );
            default:
                return;
            // return (<img className="payment_button" src={iconWechatpayColor} alt="icon" />);
        }
    }

    onPaymentClick = (paymentBrand) => {
        this.props.activePayment(paymentBrand);
    }

    render() {
        return (
            <div>
                <div className="payment-btn-container">
                    <div onClick={() => this.onPaymentClick(this.state.paymentMethod)}>
                        {this.paymentBranding()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        paymentBrand: state.paymentReducer.paymentBrand
    });
}

export default connect(mapStateToProps, {
    activePayment
})(PaymentMethod);
