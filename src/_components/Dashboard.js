import React, { Component } from 'react';

import Checkout from './Checkout';
import PaymentMethodMenu from './PaymentMethodMenu';
import PriceCard from './PriceCard';

class Dashboard extends Component {

    render() {
        return(
            <div className="container">
                <div className="wrapper">
                    <div className="container-top">
                        <PaymentMethodMenu />
                    </div>
                    <PriceCard />
                    <div className="container-bottom">
                        <Checkout />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;