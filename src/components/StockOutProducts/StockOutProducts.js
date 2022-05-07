import React, { useEffect, useState } from 'react';
import StockOutSoon from '../StockOutSoon/StockOutSoon';

const StockOutProducts = () => {
    const [products, setProducts] = useState([]);
    const stockOutSoon = products.filter(product => product.quantity <= 10)

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
        setProducts(stockOutSoon);
    }, [setProducts]);





    return (
        <div className='container'>
            <h3 className='text-center text-danger mt-5'>Stock Out Soon</h3>
            <div className='row'>
                {

                    stockOutSoon.slice(0, 3).map(lessProduct => <StockOutSoon
                        key={lessProduct._id}
                        product={lessProduct}
                    ></StockOutSoon>)
                }

            </div>
        </div>
    );
};

export default StockOutProducts;