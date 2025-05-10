import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost/apade_stock_management_backend/product/get_product.php");
        console.log("you reached the page successfully", response);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <center>
      <div className="user-list-container">
      <h2>Product List</h2>
     <table border="1">
        <thead>
          <tr>
            <th>Productname</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
          </thead>
        <tbody>
        {products.map((product) => (
          <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
           <td>
           <button>Edit</button>
           <button>Delete</button>
           </td>
           </tr>
        ))}
      </tbody>
      </table>
    </div>
    </center>
  );
};

export default ProductList;
