import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name'],
            trim: true,
            maxlength: [100, 'Product name cannot exceed 100 characters'],
        },
        description: {
            type: String,
            required: [true, 'Please enter product description'],
        },
        price: {
            type: Number,
            required: [true, 'Please enter product price'],
            maxlength: [7, 'Price cannot exceed 7 digits'],
        },
        ratings: {
            type: Number,
            default: 0,
        },
        images: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        category: {
            type: String,
            required: [true, 'Please select category for this product'],
        },
        stock: {
            type: Number,
            required: [true, 'Please enter product stock'],
            maxlength: [5, 'Stock cannot exceed 5 digits'],
            default: 1,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },
        reviews: [
            {
                name: {
                    type: String,
                    required: true,
                },
                rating: {
                    type: Number,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);

export default mongoose.model("Product", productSchema);