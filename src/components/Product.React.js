import React from 'react';
import ReactDOM from 'react-dom';
import ProductActions from '../actions/ProductActions';
import _ from 'underscore';

function checksoldout(product, arraycart) {
    // Store === 0 => sold out
    if(product.inventory === 0)
        return true;
    // Cart === 0 
    if(Object.keys(arraycart).length === 0)
        return false;
    if(Object.keys(arraycart).length > 0){
        var index = _.indexOf(_.pluck(arraycart, 'id'), product.id);
        if(index >= 0){
            var quantity = arraycart[index].quantity;
            if( quantity == product.inventory )
                return true;
        }
    }
    return false;
}

var Product = React.createClass({
    handleClick: function(items, event) {
        var update = {
            id: items.id,
            name: items.name,
            price: items.price,
            quantity: 1,
        };

        ProductActions.addToCart(items.id, update);
        ProductActions.updateCartVisible(true);
    },
    viewDetailClick: function(id, event){
        event.preventDefault();
        this.props.viewDetail(id);
    },
   
    render: function() {
        return (
            <div>
                {this.props.product.map(pro => {
                    return (
                        <div key={pro.id} className="flux-product">
                            <a href="#" onClick={this.viewDetailClick.bind(this, pro.id)}><img src={'img/' + pro.image}/></a>
                            <div className="flux-product-detail">
                                <h1 className="name">{pro.name}</h1>
                                <p className="description">{pro.description}</p>
                                <p className="price">Price: <b>${pro.price}</b></p>
                                <button type="button" onClick={this.handleClick.bind(this, pro)} disabled={checksoldout(pro, this.props.cartItem)}>
                                    { checksoldout(pro, this.props.cartItem) === false ? 'Buy Product' : 'Sold Out' }
                                </button>
                                <br />
                            </div>
                        </div>  
                    );
                })}
            </div>
        );
    },
});

module.exports = Product;