"use client";

import React, { useState, useEffect } from 'react';

function UpdateProduct({ params }) {
    const { id } = params;

    const [product, setProduct] = useState({
        name: "",
        price: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/product/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setProduct(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch(`http://localhost:3000/api/product/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            const result = await response.json();
            console.log('Product updated:', result);
            // Optionally redirect or give success feedback to user here
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Update Product</h1>
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
                <button type="submit" className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2' disabled={submitting}>
                    {submitting ? 'Updating...' : 'Update Product'}
                </button>
            </form>
            {error && <div className='text-red-500 mt-2'>{error}</div>}
        </div>
    );
}

export default UpdateProduct;
