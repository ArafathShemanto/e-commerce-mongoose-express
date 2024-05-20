import { Request, Response } from "express"
import cors from "cors"
const express = require('express')
const app = express()

// PERCERS HERE 
app.use(express.json());
app.use(cors())


// ALL ROUTE HERE 
app.get('/', (req: Request, res: Response) => {
    console.log("hei bro")
    res.send('Hello World!')
})




export default app