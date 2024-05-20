import { Request, Response } from "express"
import { ProductServices } from "./product.service"


const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        console.log(product,"i got the data")
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


export const productController = {
    createProduct
}