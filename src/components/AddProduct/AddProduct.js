import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = `https://powerful-chamber-08415.herokuapp.com/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        toast("Product Added Successfully");
    };


    return (
        <div className="w-50 mx-auto">
            <h1>Please add a Product:</h1>
            <div>
                <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-2" placeholder="Name" {...register("name")} />
                    <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
                    <input className="mb-2" placeholder="Image URL" {...register("img")} />
                    <input className="mb-2" placeholder="Description" {...register("description")} />
                    <input className="mb-2" placeholder="Quantity" type="number" {...register("quantity")} />
                    <input className="mb-2" placeholder="Supplier Name" {...register("supplier_name")} />
                    <input className="text-danger" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;