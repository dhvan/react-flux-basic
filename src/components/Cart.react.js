import React from 'react';
import ProductActions from '../actions/ProductActions';

var Cart = React.createClass({
    closeCart: function(){
        ProductActions.updateCartVisible(false);
    },

    openCart: function(){
        ProductActions.updateCartVisible(true);
    },
    removeFromCart: function(pro, event){
        ProductActions.removeFromCart(pro.id);
    },

    render: function() {
        var self = this, products = this.props.product;
        return (
            <div className={"flux-cart " + (!this.props.visible || this.props.totalItems == 0 ? '' : 'active')}>
            <div className="mini-cart">
            <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
            <ul>
            {Object.keys(products).map(product => {
                return (
                    <li key={product}>
                    <h1 className="name">{products[product].name}</h1>
                    <br />
                    <p className="price">${products[product].price.toFixed(2)} ({products[product].quantity})</p>
                    <button type="button" className="remove-item" onClick={this.removeFromCart.bind(self, products[product])}>Remove</button>
                </li>
                )
            })}
            </ul>
            <span className="total">Total: ${this.props.totalCart.toFixed(2)}</span>
            </div>
            <button type="button" className="view-cart" onClick={this.openCart} disabled={this.props.totalItems == 0 ? true: false}>View Cart ({this.props.totalItems})</button>
            </div>
        );
    },
});

module.exports = Cart;