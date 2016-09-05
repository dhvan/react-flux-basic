import React from 'react';
import Product  from './Product.react.js';
import ProductStore from '../stores/ProductStore';
import Cart from './Cart.react.js';
import CartStore from '../stores/CartStore';
import Detail from './Detail.react.js';

function getCartState() {
    return {
        product: ProductStore.getProduct(),
        cartVisible: CartStore.getCartVisible(),
        cartItems: CartStore.getCartItems(),
        totalItems: CartStore.getTotalItems(),
        totalCart: CartStore.getTotalCart(),
        showModal: true,
        modalDetailId: 0
    };
}

var ProductApp = React.createClass({

    getInitialState: function() {
        return getCartState();
    },

    componentDidMount: function() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getCartState());
    },

    viewDetail: function(id) {
        this.setState({showModal: false, modalDetailId: id});
    },

    render: function() {
        return (
          <div className="flux-cart-app">
            <div className="title">TBV Shop Online</div>
            <Cart product={this.state.cartItems} visible={this.state.cartVisible} totalItems={this.state.totalItems} totalCart={this.state.totalCart}/>
            <Product product={this.state.product} cartItem={this.state.cartItems} viewDetail={this.viewDetail}/>
            <Detail showModal={this.state.showModal} modalDetailId={this.state.modalDetailId}/>
            <footer> © Copyright 2016 Techbase VietNam</footer>
          </div>
      );
    },
});

module.exports = ProductApp;