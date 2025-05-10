import React, { useState } from "react";
import { addProduct } from "../../api/productApi";

const AddProductForm = ({ onProductAdded }) => {
  const [form, setForm] = useState({ name: "",price: '', quantinty: 0 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(form);
   location.href="/products"
    // onProductAdded();
    alert("Product added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" onChange={handleChange} required />
      <input name="price" type="number" placeholder="price" onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="quantity" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
