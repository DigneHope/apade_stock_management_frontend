import React, { useEffect, useState } from 'react';
import './ManageProduct.css';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ id: '', name: '' });

  useEffect(() => {
    setProducts([{ id: '1', name: 'Sugar' }]);
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProductData = { id: `Example:${products.length + 1}`, name: newProduct.name };
    setProducts([...products, newProductData]);
    setNewProduct({ name: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditForm({ id: '', name: '' });
    }
  };



  const handleSaveEdit = (e) => {
    e.preventDefault();
    setProducts(products.map((product) => (product.id === editForm.id ? { ...product, name: editForm.name } : product)));
    setEditingId(null);
    setEditForm({ id: '', name: '' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ id: '', name: '' });
  };

  return (
    <div className="manage-products">
      <h2>Product management</h2>
      <div className="add-product-form">
        <h3>Add new product</h3>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editingId === product.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    required
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(product)}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;