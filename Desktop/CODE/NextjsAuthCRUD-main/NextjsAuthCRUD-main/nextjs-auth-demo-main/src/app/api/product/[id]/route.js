import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../../lib/mongodb';
import Product from '../../../../../models/product';

export async function GET(req, { params }) {
    try {
        await connectMongoDB();
        const { id } = params;
        console.log(id)

        const product = await Product.findById(id); 

        if (!product) {
            return NextResponse.json({ message: "Product not found." }, { status: 404 });
        }

        return NextResponse.json(product, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred while fetching the product." }, { status: 500 });
    }
}
