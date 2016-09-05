var ProductActions = require('../actions/ProductActions');

module.exports = {
    getProductData: function () {
        var data = JSON.parse(localStorage.getItem('product'));
        ProductActions.receiveProduct(data);
    }
};