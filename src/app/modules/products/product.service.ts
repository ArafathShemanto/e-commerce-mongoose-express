import { IProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getProductsFromDB = async () => {
    const result = ProductModel.find()
    return result
}
const createProductIntoDB = async (data: IProduct) => {
    const result = ProductModel.create(data)
    return result
}


export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB
}