import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'products', 
  }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
