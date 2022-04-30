import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const StockOutProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('stockOut.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container'>
            <h3 className='text-center text-danger mt-5'>Stock Out Products</h3>
            <div className='row'>
                {
                    products.slice(0, 3).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default StockOutProducts;