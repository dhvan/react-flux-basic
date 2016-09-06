import React from 'react';
import ReactDOM from 'react-dom';
import ProductActions from '../actions/ProductActions';
import _ from 'underscore';
import $ from 'jquery';

var flag = true;
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
    viewMoreDescription: function(des, id) {
        var showChar = 100;
        var ellipsestext = "...";
        var moretext = "Show more";
        var lesstext = "Show less";

        if(des.length > showChar) {
            var c = des.substr(0, showChar);
            var h = des.substr(showChar, des.length - showChar);
            return (
                <div>
                    <span>{c}</span>
                    <span id={"ellipsestext"+id} className="moreellipses">{ellipsestext}</span>
                    <span className="morecontent">
                        <span id={id}>{h}</span>
                        <a id={"morelink"+id} onClick={this.showMore.bind(this, id)} href="#" className="morelink">{moretext}</a>
                    </span>
                </div>
            );
        }
    },

    showMore: function(id, event) {
        $("#" + id).toggle();
        if(flag){
            $("#ellipsestext"+id).hide();
            $("#morelink"+id).html("Show less");
            flag = false;
        } else{
            $("#ellipsestext"+id).show();
            $("#morelink"+id).html("Show more");
            flag = true;
        }
        return false;
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
                                <div className="description">{this.viewMoreDescription(pro.description, pro.id)}</div>
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