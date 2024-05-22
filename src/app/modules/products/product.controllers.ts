import { Request, Response } from "express"
import { ProductServices } from "./product.service"
import mongoose from "mongoose";


const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        console.log(product, "product created")
        const result = await ProductServices.createProductIntoDB(product)
        res.status(200).json({
            "success": true,
            "message": "Product created successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error)
    }
}

// GET ALL PRODUCTS 
const getProducts = async (req: Request, res: Response) => {
    try {
        console.log(req.query.searchTerm, "query params")
        const result = await ProductServices.getProductsFromDB()
        res.status(200).json({
            "success": true,
            "message": "Products fetched successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error)
    }
}

// GET SINGLE DATA BY ID
const getProductByID = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        console.log(productId, "productId")

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is required.',
            });
        }

        const result = await ProductServices.getProductByIDFromDB(productId)

        // if product not found 
        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Product not found.',
            });
        }
        res.status(200).json({
            "success": true,
            "message": "Products fetched successfully!",
            "data": result
        })

    } catch (error: any) {
        // Handle specific Error
        if (error instanceof mongoose?.Error?.CastError) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format.',
            });
        }

        // Handle all other errors
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the product.',
        });
    }
}

// DELETE A PRODUCT BY ID 
const deleteProductByID = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteProductByIDFromDB(productId)
        res.status(200).json({
            "success": true,
            "message": "Product Deleted successfully!",
            "data": null
        })
    } catch (error) {
        console.log(error)
    }
}

export const productController = {
    createProduct,
    getProducts,
    getProductByID,
    deleteProductByID
}