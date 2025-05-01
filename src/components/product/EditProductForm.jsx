import React, { useState } from "react";
import { updateProduct } from "../../api/productApi";

const EditProductForm = ({ product, onProductUpdated }) => {
  const [form, setForm] = useState({ ...product });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(form.id, form);
    onProductUpdated();
    alert("Product updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="stock" type="number" value={form.stock} onChange={handleChange} required />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProductForm;
