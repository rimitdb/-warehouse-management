import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://powerful-chamber-08415.herokuapp.com/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="container">
            <h3 className="text-center text-danger">Inventory Items</h3>
            <div className="row">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
            <div className="my-5 text-center">
                <Link to="/manage-inventory">
                    <button className="btn btn-success">Manage Inventories</button>
                </Link>

            </div>
        </div>
    );
};

export default Products;