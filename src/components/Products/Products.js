import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://powerful-chamber-08415.herokuapp.com/product")
            .then(res => res.json())
            .then(data => setProducts(data))
        setIsLoading(false)
    }, []);

    return (
        <div className="container">
            <h3 className="text-center text-danger">Inventory Items</h3>
            {isLoading ? <Spinner /> : ""}
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