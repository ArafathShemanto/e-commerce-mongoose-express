import { Request, Response } from "express"

const express = require('express')
const app = express()


app.get('/', (req: Request, res: Response) => {
    console.log(req)
    res.send('Hello World!')
})




export default app