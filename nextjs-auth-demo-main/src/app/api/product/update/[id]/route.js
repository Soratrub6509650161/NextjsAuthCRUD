import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../../../lib/mongodb';
import Product from '../../../../../../models/product';

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const product = await req.json();
        await connectMongoDB();
        const result = await Product.findByIdAndUpdate(id, product, { new: true });

        if (!result) {
            return NextResponse.json({ message: "Product not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Product updated successfully.", product: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while updating the product." }, { status: 500 });
    }
}
