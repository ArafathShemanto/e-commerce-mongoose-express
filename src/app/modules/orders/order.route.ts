import express from "express";
import { OrderControllers } from "./order.controllers";


const Router = express.Router()


Router.get("/", OrderControllers.getOrders)
Router.post("/", OrderControllers.createOrder)


export const orderRoutes = Router