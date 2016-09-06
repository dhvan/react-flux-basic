import React from 'react';
import ImageGallery from 'react-image-gallery';
import ProductStore from '../stores/ProductStore';
import CartStore from '../stores/CartStore';

const Example = React.createClass({
    getInitialState() {
        return { 
            data: [],
            cart: [],
            showModal: true, 
            showMore: false,
        };
    },

    close(event) {
        event.preventDefault();
        this.setState({ showModal: true });
    },

    componentWillReceiveProps(nextProps) {
        var id = nextProps.modalDetailId;
        var pro = ProductStore.getId(id);
        var cart = CartStore.getId(id);
        this.setState({ data: pro, cart: cart, showModal: nextProps.showModal });
    },

    handleImageLoad(event) {
        console.log('Image loaded ', event.target);
    },
 
    handlePlay() {
        this._imageGallery.play();
    },

    handlePause() {
        this._imageGallery.pause();
    },

    render() {
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                originalAlt: 'original-alt',
                thumbnailAlt: 'thumbnail-alt',
                thumbnailLabel: 'Optional',
                description: 'Optional description...',
                size: 'Optional size (image size relative to the breakpoint)'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ];

        return (
            <div className={ this.state.showModal ? 'pop-up-hidden': 'pop-up-show'}>
                <div className="popup-backdrop fade"></div>
                <div className="popup-body fade">
                    <div className="header">
                        <button type="button" className="close-cart" onClick={this.close}>X</button>
                    </div>
                    <br />
                    <div className="flux-product detail">
                        <img src={this.state.showModal ? '' : ('img/' + this.state.data.image)}/>
                        <div className="flux-product-detail">
                            <h1 className="name">{this.state.data.name}</h1>
                            <p className="description">{this.state.data.description}</p>
                            <p className="price">Price: <b>${this.state.data.price}</b></p>
                            <p className="price">Store: <b>{this.state.data.inventory}</b></p>
                            <p className="price">Cart: <b>{this.state.cart.quantity ? this.state.cart.quantity : 0}</b></p>
                            <br />
                        </div>
                    </div>  
                </div>
            </div>

        );
    }
});

module.exports = Example;