import * as z from "zod";

export const orderValidation = z.object({
    email: z
        .string()
        .email({ message: "Invalid email format" })
        .trim()
        .min(1, { message: "Email is required" }),
    productId: z.string().trim().min(1, { message: "Product ID is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    quantity: z.number().int({ message: "Quantity must be an integer" }).positive({ message: "Quantity must be positive" }),
})