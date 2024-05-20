import express, { Application, Request, Response } from "express"
import cors from "cors"
import { productRoutes } from "./app/modules/products/product.route";

const app: Application = express();
// PERCERS HERE 
app.use(express.json());
app.use(cors())


const getproduct = (req: Request, res: Response) => {
    res.send('Hello World!')
}

// products routes 
app.use('/api/products', productRoutes);


// ALL ROUTE HERE 
app.get('/', getproduct)



export default app