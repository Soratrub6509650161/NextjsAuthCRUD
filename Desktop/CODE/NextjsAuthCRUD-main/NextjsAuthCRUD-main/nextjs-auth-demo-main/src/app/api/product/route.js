import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/mongodb';
import Product from '../../../../models/product';

export async function GET(req) {
    try {
        await connectMongoDB();
        const products = await Product.find({}); 

        return NextResponse.json(products, { status: 200 }); 

    } catch (error) {
        return NextResponse.json({ message: "An error occurred while fetching the products." }, { status: 500 });
    }
}
