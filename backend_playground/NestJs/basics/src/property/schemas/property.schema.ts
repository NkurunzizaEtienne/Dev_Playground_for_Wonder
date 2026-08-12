import { z } from "zod"
export const PropertySchema = z.object({
    address : z.string().min(2),
    price : z.number().positive({message: "that price is not positive muderfucker!!!"}),
    bedrooms : z.number()

})

export type PropertyDto = z.infer<typeof PropertySchema>