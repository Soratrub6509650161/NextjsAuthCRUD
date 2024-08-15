"use client";

import React, { useState, useEffect } from 'react';

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      const result = await response.json();
      console.log('Product added:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={product.name} 
          onChange={handleChange} 
          className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
          placeholder='Enter product name' 
        />
        <input 
          type="text" 
          name="price" 
          value={product.price} 
          onChange={handleChange} 
          className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
          placeholder='Enter product price' 
        />
        <button type="submit" className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
