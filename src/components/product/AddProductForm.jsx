// components/product/AddProductForm.jsx
import React, { useState } from "react";
import { addProduct } from "../../api/productApi";

const AddProductForm = ({ onProductAdded }) => {
  const [form, setForm] = useState({ name: "", stock: 0 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(form);
    onProductAdded();
    alert("Product added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" onChange={handleChange} required />
      <input name="stock" type="number" placeholder="Stock" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
