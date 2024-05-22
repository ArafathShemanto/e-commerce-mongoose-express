import { IOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const getOrderFromDB = async () => {
    const result = OrderModel.find()
    return result
}
const CreateOrderIntoDB = async (order: IOrder) => {
    const result = OrderModel.create(order)
    return result
}

export const OrderServices = {
    getOrderFromDB,
    CreateOrderIntoDB
}