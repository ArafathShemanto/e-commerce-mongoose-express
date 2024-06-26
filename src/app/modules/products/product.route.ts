import express from 'express';
import { productController } from './product.controllers';

// ROUTES FOR PRODUCT
const Router = express.Router()
Router.get("/", productController.getProducts)
Router.post("/", productController.createProduct)
Router.put("/:productId", productController.updateProduct)
Router.get("/:productId", productController.getProductByID)
Router.delete("/:productId", productController.deleteProductByID)


export const productRoutes = Router