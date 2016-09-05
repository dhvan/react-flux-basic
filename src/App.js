import React from 'react';
import ReactDOM from 'react-dom';
import ProductData from './ProductData';
import ProductAPI from './utils/ProductAPI';
import ProductApp from './components/ProductApp.react';

ProductData.init();
ProductAPI.getProductData();

ReactDOM.render(
    <ProductApp />,
    document.getElementById('root')
);