import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const getOrders = async (req: Request, res: Response) => {
    try {

        const result = await OrderServices.getOrderFromDB()
        res.status(200).json({
            "success": true,
            "message": "Orders fetched successfully!",
            "data": result
        })

    } catch (error) {
        console.log(error)
    }
}
const createOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        console.log(order, "orders create")
        const result = await OrderServices.CreateOrderIntoDB(order)

        res.status(200).json({
            "success": true,
            "message": "Order created successfully!",
            "data": result
        })

    } catch (error) {
        console.log(error)
    }
}

export const OrderControllers = {
    getOrders,
    createOrder
}