import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../../../lib/mongodb';
import Product from '../../../../../../models/product';

export async function DELETE(req, { params }) {
    try {
        const { id } = params;

        await connectMongoDB();
        const result = await Product.findByIdAndDelete(id);

        if (!result) {
            return NextResponse.json({ message: "Product not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Product deleted successfully." }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while deleting the product." }, { status: 500 });
    }
}
