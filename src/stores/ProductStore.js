var AppDispatcher = require('../dispatcher/AppDispatcher');
import Events from 'events';
var ProductConstants = require('../constants/ProductConstants');
var _ = require('underscore');
var EventEmitter = Events.EventEmitter;

var _product = {}, _selected = null;
function loadProductData(data) {
    _product = data;
}

var ProductStore = _.extend({}, EventEmitter.prototype, {

    getProduct: function() {
        return _product;
    },

    getId: function(id) {
        var index = _.indexOf(_.pluck(_product, 'id'), id);
        if(index  > -1){
            return _product[index];
        }
        return [];
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

        case ProductConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;

        default:
            return true;
    }

    ProductStore.emitChange();
    return true;
});


module.exports = ProductStore;