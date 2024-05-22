import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    description: z.string().optional(),
    price: z.number().positive({ message: "Price must be a positive number" }),
    category: z.string().trim().min(1, { message: "Category is required" }),
    tags: z.array(z.string().trim().min(1, { message: "Tags are required" })),
    variants: z.array(
        z.object({
            type: z.string().trim().min(1, { message: "Variant type is required" }),
            value: z.string().trim().min(1, { message: "Variant value is required" }),
        })
    ).min(1, { message: "At least one variant is required" }),
    inventory: z.object({
        quantity: z.number().int({ message: "Quantity must be an integer" }).positive({ message: "Quantity must be positive" }),
        inStock: z.boolean(),
    }),
})


export default productSchema