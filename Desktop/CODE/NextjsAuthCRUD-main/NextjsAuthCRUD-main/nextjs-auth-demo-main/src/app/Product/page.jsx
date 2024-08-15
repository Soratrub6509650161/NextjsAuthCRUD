"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from 'next/link';

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data: session } = useSession();
  if (!session) redirect("/login");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const DeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/delete/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      // Remove the deleted product from the state
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <li>
        <Link href="/Product/add" className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2'>
          AddProduct
        </Link>
      </li>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <li onClick={() => DeleteProduct(item._id)}>Delete Product</li>
          <Link href={`/Product/update/${item._id}`} className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2'>
          UpdateProduct
        </Link>
        </div>
      ))}
    </>
  );
}

export default Product;
