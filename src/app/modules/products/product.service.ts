import { IProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const createProductIntoDB = async (data: IProduct) => {
    const result = ProductModel.create(data)
    return  result
}


export const ProductServices = {
    createProductIntoDB
}