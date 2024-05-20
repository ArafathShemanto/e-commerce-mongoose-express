import express from 'express';
import { productController } from './product.controllers';


const Router = express.Router()
Router.post("/", productController.createProduct)



export const productRoutes = Router