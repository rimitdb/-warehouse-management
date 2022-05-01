import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ product }) => {
    const { productId } = useParams();
    const { name, price, img, description, quantity, supplier_name } = product;

    return (
        <div>
            <h3>Details information of the Product {productId}</h3>
            <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
                <div className='card'>
                    <img src={img} className="card-img-top" alt="images_name" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-title">Price: ${price}</h6>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Available Stock: {quantity}</p>
                        <p className="card-text">Supplier: {supplier_name}</p>
                        <button className='btn btn-success'>Update Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;