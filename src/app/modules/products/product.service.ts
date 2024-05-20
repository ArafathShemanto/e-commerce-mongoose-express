import { IProduct } from "./product.interface"
import { ProductModel } from "./product.model"

const getProductsFromDB = async () => {
    const result = await ProductModel.find()
    return result
}
const createProductIntoDB = async (data: IProduct) => {
    const result = await ProductModel.create(data)
    return result
}
const getProductByIDFromDB = async (productId: string) => {
    console.log(productId, "productId is that")
    const result = await ProductModel.findById({ _id: productId })
    return result
}

const deleteProductByIDFromDB = async (productId: string) => {
    console.log(productId, "productId is that")
    const result = await ProductModel.findByIdAndDelete({ _id: productId })
    console.log(result, "lol result")
    return result
}

export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    getProductByIDFromDB,
    deleteProductByIDFromDB
}