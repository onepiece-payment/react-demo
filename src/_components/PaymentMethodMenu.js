import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailablePaymentMethods } from '../_actions/payment.action';

import PaymentMethod from './PaymentMethod';

class PaymentMethodMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paymentMethodsArr: []
        }
    }
 
    componentDidMount() {
        this.props.getAvailablePaymentMethods();
    }

    componentWillUpdate(nextProps) {
        if (this.props.availableRings !== nextProps.availableRings) {
            this.setState({
                paymentMethodsArr: nextProps.availableRings
            })
        }
    }

    renderPaymentMethod() {
        return this.state.paymentMethodsArr.map(_name => {
            return (
                <div key={_name} className="paymentMethod_container">
                    <PaymentMethod name={_name} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="flex-box-payment-method">
                {this.renderPaymentMethod()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        availableRings: state.paymentReducer.availablePaymentMethods
    })
}

export default connect(mapStateToProps, { getAvailablePaymentMethods })(PaymentMethodMenu);
