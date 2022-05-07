import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Product from "../Product/Product";

const ManageInventory = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    const removeItem = id => {
        const proceed = window.confirm("Are you Sure?");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }


    const handleAddProduct = () => {
        navigate(`/addproduct`);
    }
    return (
        <div className='container'>
            <h3 className='my-5 text-center text-success'>Inventory Items</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <td>{product.name}</td>
                            <td><img src={product.img} width="50px" height="50px" alt="" /></td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.supplier_name}</td>
                            <td><Button className="btn btn-danger" onClick={() => removeItem(product._id)}>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </table>

            <div className="text-center" ><Button onClick={() => handleAddProduct()} className="mt-5 btn btn-success">Add Product</Button></div>

        </div>
    );
};

export default ManageInventory;