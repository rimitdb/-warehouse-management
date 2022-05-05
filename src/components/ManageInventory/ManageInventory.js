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


            {
                products.map(product => <div key={product._id}>

                    <h5>{product.name}
                        <Button className="btn btn-danger" onClick={() => removeItem(product._id)}>Delete</Button>
                    </h5>
                </div>)
            }


            <h3 className='text-center text-danger mt-5'>Inventory Items</h3>
            {/* <DataTable columns={columns} data={products} responsive highlightOnHover /> */}
            <div className="text-center" ><Button onClick={() => handleAddProduct()} className="mt-5 btn btn-success">Add Product</Button></div>

        </div>
    );
};

export default ManageInventory;