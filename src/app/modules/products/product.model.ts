import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const VariantSchema: Schema<IVariant> = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const InventorySchema: Schema<IInventory> = new Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
});

export const ProductModel = model<IProduct>('Product', productSchema);