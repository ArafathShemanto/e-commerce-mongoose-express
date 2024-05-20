import { Request, Response } from "express"
import { ProductServices } from "./product.service"


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

const getProducts = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        console.log(product, "i got the data")
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

export const productController = {
    createProduct,
    getProducts
}