import { IOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const getOrderFromDB = async (email: string) => {
    const filter = email ? { email: { $regex: email, $options: 'i' } } : {}
    console.log(filter, "filter")
    const result = OrderModel.find(filter).exec()
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