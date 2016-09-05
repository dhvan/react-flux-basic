import AppDispatcher from '../dispatcher/AppDispatcher';
import ProductConstants from '../constants/ProductConstants';
var EventEmitter = require('events').EventEmitter;
import _ from 'underscore';

var _product = {}, _cartVisible = false;

function add(id, update){
    var index = _.indexOf(_.pluck(_product, 'id'), id);
    if(index  > -1){
        _product[index].price = _product[index].price + update.price;
        _product[index].quantity ++;
    }
    else{
        let idx = Object.keys(_product).length;
        _product[idx] = _.extend({}, _product[idx], update);
    }
}

function setCartVisible(flag){
    _cartVisible = flag;
}

function removeCart(id) {
    _product = _.reject(_product, function(item) {
        return item.id === id;
    });
}

var CartStore = _.extend({}, EventEmitter.prototype, {
    getCartItems: function() {
        return _product;
    },

    getTotalItems: function() {
        return Object.keys(_product).length;
    },

    getTotalCart: function() {
        var total = 0;
        _.each(_product, function(pro) {
            total+=pro.price;
        });
        return total;
    },

    getCartVisible: function() {
        return _cartVisible;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
        case ProductConstants.CART_ADD: 
            add(action.id, action.update);
            break;
        case ProductConstants.CART_VISIBLE:
            setCartVisible(action.cartVisible);
            break;
        case ProductConstants.CART_REMOVE:
            removeCart(action.id);
            break;
        default:
            break;
    }

    CartStore.emitChange();

    return true;
});

module.exports = CartStore;