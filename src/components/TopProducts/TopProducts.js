import React, { useEffect, useState } from "react";
import StockOutSoon from "../StockOutSoon/StockOutSoon";

const TopProducts = () => {
    const [products, setProducts] = useState([]);
    const topProductList = products.filter(product => product.price >= 100)

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
        setProducts(topProductList);
        console.log(topProductList)
    }, [setProducts]);

    return (
        <div className='container'>
            <h3 className='mt-5 text-center text-danger'>Top Products</h3>
            <div className='row'>
                {
                    topProductList.slice(0, 3).map(product => <StockOutSoon
                        key={product._id}
                        product={product}
                    ></StockOutSoon>)
                }

            </div>
        </div>
    );
};

export default TopProducts;