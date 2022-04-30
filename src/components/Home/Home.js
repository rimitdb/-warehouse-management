import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import StockOutProducts from '../StockOutProducts/StockOutProducts';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <TopProducts></TopProducts>
            <StockOutProducts></StockOutProducts>
        </div>
    );
};

export default Home;