import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container'>
            <h3 className='text-center text-danger'>Inventory Items</h3>
            <div className='row'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
            <div className='mt-5 text-center btn btn-danger'>
                <Link to="/manage-inventory">
                    <button className='text-center btn btn-danger'>Manage Inventory</button>
                </Link>

            </div>
        </div>
    );
};

export default Products;