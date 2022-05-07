import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [reload]);

    const handleDelivered = () => {
        const newQuantity = (parseInt(product.quantity) - 1);
        const updateQuantity = `${newQuantity}`;
        const productQuantity = { updateQuantity };
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productQuantity)
        })
            .then(res => res.json())
            .then(result => {
                setProduct(result);
                setIsReload(!reload);
                toast.success("Quantity Updated");
                console.log(productQuantity, JSON.stringify(productQuantity));

            });

    };

    const updateStock = event => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value);
        const newStock = quantity + parseInt(product.quantity);
        const updateQuantity = `${newStock}`
        const productQuantity = { updateQuantity };

        console.log(productQuantity);
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productQuantity)
        })
            .then(res => res.json())
            .then(result => {
                setProduct(result);
                toast.success("Stock Updated");
                event.target.reset();
                setIsReload(!reload);
            })

    };


    return (
        <div>
            <h3 className="my-5 text-center">Product details information:</h3>
            <div className="g-5 col-sm-12 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <img src={product.img} className="card-img-top mx-auto w-50" alt="images_name" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-title">Price: ${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Available Stock: {product.quantity}</p>
                        <p className="card-text">Supplier: {product.supplier_name}</p>
                        <button onClick={handleDelivered} className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-25 mx-auto">
                <form className="d-flex flex-column" onSubmit={updateStock}>
                    <input className="mb-2" placeholder="Quantity" name="quantity" type="number" required /><br />
                    <input className="text-danger" type="submit" value="Re-Stock Product" />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;