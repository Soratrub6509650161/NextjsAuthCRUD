import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../../lib/mongodb';
import Product from '../../../../../models/product';

export async function POST(req) {
    try {
        const product = await req.json();
        await connectMongoDB();
        const result = await Product.create(product); 

        return NextResponse.json(result, { status: 200 }); 

    } catch (error) {
        return NextResponse.json({ message: "An error occurred while adding the product." }, { status: 500 });
    }
}
