import AppDispatcher from '../dispatcher/AppDispatcher';
import ProductConstants from '../constants/ProductConstants';

var ProductActions = {
    receiveProduct: function(data) {
        AppDispatcher.handleAction({
            actionType: ProductConstants.RECEIVE_DATA,
            data: data
        })
    },

    addToCart: function(id, update) {
        AppDispatcher.handleAction({
            actionType: ProductConstants.CART_ADD,
            id: id,
            update: update
        })
    },

    removeFromCart: function(id) {
        AppDispatcher.handleAction({
            actionType: ProductConstants.CART_REMOVE,
            id: id
        })
    },

    updateCartVisible: function(cartVisible) {
        AppDispatcher.handleAction({
            actionType: ProductConstants.CART_VISIBLE,
            cartVisible: cartVisible
        })
    }
};

module.exports = ProductActions;