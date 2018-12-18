import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAvailablePriceList, selectedPrice } from '../_actions/payment.action';

class PriceCard extends Component {

    componentDidMount() {
        this.props.getAvailablePriceList();
    }

    divideAmountToHundred(amount) {
        return parseFloat(amount / 100).toFixed(2)
    }

    selectPrice = (price) => {
        this.props.selectedPrice(price)
    }

    render() {
        if (this.props.priceArr.length === 0) {
            return (
                <div>下載中。。。</div>
            )
        }
        return (
            <div className="flex-box">
                {this.props.priceArr.map(price => {
                    return (
                        <div key={price}><button className="price-card" onClick={() => {this.selectPrice(price)}}>￥{this.divideAmountToHundred(price)}</button> </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        priceArr: state.paymentReducer.priceList
    })
}

export default connect(mapStateToProps, { getAvailablePriceList, selectedPrice })(PriceCard);