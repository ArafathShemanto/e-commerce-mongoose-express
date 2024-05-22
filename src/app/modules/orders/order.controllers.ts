import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidation } from "./order.validation";
import { z } from "zod";

const getOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query
        const result = await OrderServices.getOrderFromDB(email as any)
        console.log(result,"result")
        if (!result || result?.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Order not found',
            });
        }
        res.status(200).json({
            "success": true,
            "message": "Orders fetched successfully!",
            "data": result
        })

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong",
            errors: error.errors,
        });
    }
}
const createOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        console.log(order, "orders create")

        const validData = orderValidation.parse(order)
        const result = await OrderServices.CreateOrderIntoDB(validData)

        res.status(200).json({
            "success": true,
            "message": "Order created successfully!",
            "data": result
        })

    } catch (error: any) {
        // ERROR HANDLING 
        if (error instanceof z.ZodError) {
            res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error.errors,
            });
        } else {
            res.status(500).json({
                success: false,
                message: error.message || 'Something went wrong',
                error: error,
            });
        }
    }
}

export const OrderControllers = {
    getOrders,
    createOrder
}