import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ManageInventory = () => {

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
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>

        </div>
    );
};

export default ManageInventory;