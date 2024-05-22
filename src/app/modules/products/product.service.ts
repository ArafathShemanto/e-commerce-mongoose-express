import { IProduct } from "./product.interface"
import { ProductModel } from "./product.model"

// GET PRODUCTS
const getProductsFromDB = async () => {
    const result = await ProductModel.find()
    return result
}
// CREATE PRODUCT
const createProductIntoDB = async (data: IProduct) => {
    const result = await ProductModel.create(data)
    return result
}
// UPDATE PRODUCT
const updateProductByID = async (productID: string, data: IProduct) => {
    const result = await ProductModel.findByIdAndUpdate(productID, data, { new: true })
    return result
}

// GET SINGLE PRODUCT
const getProductByIDFromDB = async (productId: string) => {
    console.log(productId, "productId is that")
    const result = await ProductModel.findById({ _id: productId })
    return result
}
// DELETE PRODUCT
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
    deleteProductByIDFromDB,
    updateProductByID
}