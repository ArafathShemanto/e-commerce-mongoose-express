import cors from "cors"
import express, { Application, NextFunction, Request, Response } from "express"
import { productRoutes } from "./app/modules/products/product.route";
import { orderRoutes } from "./app/modules/orders/order.route";

const app: Application = express();
// PERCERS HERE 
app.use(express.json());
app.use(cors())






// products routes 
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);



// if route is not found 
const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
};
app.use(notFoundHandler);
app.get('/', (req, res) => {
    res.send('Ecommerce Backed Express Mongoose')
})
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack);
    res.status(500).json({
        success: false,
        message: error.message || 'Internal Server Error',
    });
});


export default app