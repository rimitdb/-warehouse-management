import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    // const { name, price, img, description, quantity, supplier_name } = product;

    return (
        <div >
            <h3 className="my-5 text-center">Product details information:</h3>
            <div className='g-5 col-sm-12 col-md-6 col-lg-4 mx-auto'>
                <div className='card'>
                    <img src={product.img} className="card-img-top" alt="images_name" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-title">Price: ${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Available Stock: {product.quantity}</p>
                        <p className="card-text">Supplier: {product.supplier_name}</p>
                        <button className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;