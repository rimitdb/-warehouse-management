import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, price, img, description, quantity, supplier_name } = product;
    const navigate = useNavigate();

    const handleStockUpdate = id => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='card'>
                <img src={img} className="card-img-top" alt="images_name" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price: ${price}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Available Stock: {quantity}</p>
                    <p className="card-text">Supplier: {supplier_name}</p>
                    <button onClick={() => handleStockUpdate(_id)} className='btn btn-success'>Update Stock</button>
                </div>
            </div>
        </div>
    );

}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    supplier_name: PropTypes.string
}


export default Product;