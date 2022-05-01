import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
// import Product from "../Product/Product";

const ManageInventory = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const removeItem = () => {

        setProducts();
    }
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Image",
            selector: (row) => <img width={50} height={50} src={row.img} />,
        },
        {
            name: "Price",
            selector: (row) => row.price,
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
        },
        {
            name: "Action",
            cell: () => (<Button className="btn btn-danger" onClick={() => removeItem()}>Delete</Button>)
        }
    ];

    return (
        <div className='container'>

            {/* 
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div> */}
            <h3 className='text-center text-danger mt-5'>Inventory Items</h3>
            <DataTable columns={columns} data={products} responsive highlightOnHover />

        </div>
    );
};

export default ManageInventory;